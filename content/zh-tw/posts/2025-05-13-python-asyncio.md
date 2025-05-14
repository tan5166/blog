---
title: asyncio 作用與運作方式
date: 2025-05-13 15:29:17 +0800
categories: [Python]
tags: [asyncio]     # TAG names should always be lowercase
math: false
---

在 python 中，經常會看到 asyncio，但我經常不理解他背後的機制以及作用。本篇文章以高天的這部影片爲藍本，[asyncio的理解与入门](https://www.youtube.com/watch?v=brYsDi-JajI)，整理了一下 asyncio 背後的機制。
> 請支持本文大部分內容的原創者：[碼農高天](https://www.youtube.com/@minkoder)

在開始前，我們需要先釐清一件事：
> asyncio 雖然能「同時」處理多個任務，但它本質上仍是單線程、單進程。

所以，我們可以說：
1. asyncio 處理多個任務的時候不存在上下文切換。
2. 所有任務都在同一個線程內排隊執行
3. 所謂的「同時」只是透過 coroutine 在 I/O 空閒時切換任務

## asyncio 的運作邏輯

1. 程式啟動後建立一個 event loop
2. async function 被呼叫後會生成 coroutine，這些 coroutine 會被包裝成 task，註冊到 event loop 中
3. event loop 開始不斷輪着詢問這些 task，看誰準備好了就執行誰
4. 每個 task 執行時，當遇到 `await`（例如等待 I/O 完成、sleep 等），就會**主動讓出控制權**，event loop 得以去執行其他 task
5. 當被 `await` 的操作完成後，該 task 會恢復繼續執行直到下一個 await 或結束

## 什麼是 coroutine
```python
async def main():
	print('hello')
	await asyncio.sleep(1)
	print('world')
	
core = main()
asyncio.run(core)
```
所有以 `async def` 開頭的函數，都是一個 coroutine function. 當調用它的時候，返回的是一個 coroutine object.

我們可以使用 `asyncio.run()` 進入 `asynchronize` 模式，這個函數會做兩件事情：
1. 讓 event loop 來接管一切
2. 把參數內的 `coroutine` 變成 event loop 內的一個 task.


## 多個 task 下的 async 
```python
import asyncio
import time 
async def say_after(delay, what):
	await asyncio.sleep(delay)
	print(what)

async def main():
	print(f"started at {time.strftime('%X')}")
	await say_after(1, 'hello')
	await say_after(2, 'world')
	print(f"finished at {time.strftime('%X')}")

asyncio.run(main())
```
當我們在 `coroutine` 前面加上 `await` ，並且我們運行到對應的行的時候，實際上會發生幾件事情：
1. 在 `await` 後的  `coroutine` 會被包裝成 `task` 註冊進 event loop 中
2. 以 `main` 的 `task` 運行到一半遇到 `await say_after(1, 'hello')` 爲例，他會告訴 event loop，`main` 這個 `task` 需要等到 `say_after` 執行結束才能繼續執行。
3. 他會把控制權交還 event loop
4. 會把 `await` 後的  `coroutine` 的返回值保存起來

### 追蹤運轉邏輯
上述運行結果如下：
```
started at 18:08:35
hello
world
finished at 18:08:38
```
可以看到相隔了三秒，這是因爲兩個 `say_after` 不是同時註冊進 event loop 的。運行的順序如下：
1. `main` 被註冊爲 task
2. `print(f"started at {time.strftime('%X')}")` 運行
3. `say_after(1, 'hello')` 被註冊爲 task，並且 `main` 交換控制權
4. `say_after(1, 'hello')` 被 event loop 選中並執行
5. `sleep` 被註冊爲 task，並且 `say_after(1, 'hello')` 交還控制權
6. Event loop 發現現有的 task，`main, say_after(1, 'hello'), sleep` 都不能執行，只能等
7. `sleep` 執行結束，交還控制權
8. 因爲 `sleep` 結束，`say_after(1, 'hello')` 得以繼續執行，print 出 hello. `say_after(1, 'hello')` 結束，交還控制權
9. 此時，event loop 內只有 `main` 這個 task, 並且也可以繼續執行了，所以被執行。
10. 遇到第二個 `await`，重複上面的事情
11. 最後印出時間，結束。
可以看出 event loop 並不能主動接管 task，只能等 task 通過 `await` 又或是運行結束來交還控制權。

## create_task
那要如何才能早一點把 coroutine 變成 task 註冊進 event loop 呢？ Python 給我提供了 `create_task`，他可以把 coroutine 包裝成 task 註冊進 event loop 裏面，但不交還控制權，等於是分攤了 `await` 的部分功能。
```python
import asyncio
import time 
async def say_after(delay, what):
	await asyncio.sleep(delay)
	print(what)

async def main():
	task1 = asyncio.create_task(say_after(1, 'hello'))
	task2 = asyncio.create_task(say_after(2, 'world'))
	
	print(f"started at {time.strftime('%X')}")
	await task1
	await task2
	print(f"finished at {time.strftime('%X')}")

asyncio.run(main())
```
執行順序是：
1. `main()` 開始 → 註冊 task1 和 task2    
2. 兩個 task 開始執行 `say_after`，都遇到 `await asyncio.sleep(...)`，**立即交還控制權**。值得注意：這裏哪個 task 先被執行並不重要，因爲他們都會馬上交還控制權。
3. event loop 等待誰的 sleep 完成：
    - task1：1 秒後喚醒
    - task2：2 秒後喚醒
4. 1 秒過後，task1 恢復，`print("hello")`
5. 再過 1 秒，task2 恢復，`print("world")`    
6. 等 task1 和 task2 都完成，main() 才能往下繼續，`print("finished at ...")`

## 一行 await 多個 task：gather
我們可以使用 `gather` 來同時 await 多個 task，
```python
await asyncio.gather(task1, task2)
```
他會等裏面每個 task 都完成才繼續。並且 return 的值是一個 list，分別對應到對應位置 task 的 return value.

此外，如果在 `gather` 內放入的是多個 coroutine，他還能幫我們同時把他們註冊多個 task，因此，我們可以這樣簡化代碼：
```python
import asyncio
import time 
async def say_after(delay, what):
	await asyncio.sleep(delay)
	print(what)

async def main():	
	print(f"started at {time.strftime('%X')}")
	await asyncio.gather(say_after(1, 'hello'), say_after(2, 'world'))
	print(f"finished at {time.strftime('%X')}")

asyncio.run(main())
```
得到的返回結果如下：
```
started at 18:37:29
hello
world
finished at 18:37:31
```

本篇的內容就到此爲止，希望大家有學到 asyncio 的運作方式 :D 
