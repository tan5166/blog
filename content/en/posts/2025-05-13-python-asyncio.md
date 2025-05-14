---
title: The Purpose and Working Mechanism of asyncio
date: 2025-05-13 15:29:17 +0800
categories: [Python]
tags: [asyncio]     # TAG names should always be lowercase
math: false
---

In Python, we often see `asyncio`, but many (including myself) may not fully understand the mechanism and purpose behind it. This article is based on Gao Tian's [YouTube video on asyncio](https://www.youtube.com/watch?v=brYsDi-JajI), and it summarizes the inner workings of `asyncio`.

> Please support the original creator of this content: [码农高天](https://www.youtube.com/@minkoder)

### Before We Begin

> Although `asyncio` allows you to handle multiple tasks "simultaneously," it is still fundamentally **single-threaded** and **single-process**.

Therefore, we can say:

1. There's no context switching overhead when handling multiple tasks in `asyncio`.
2. All tasks are queued and executed in the **same thread**.
3. The so-called "concurrency" is achieved by switching between coroutines **during I/O idle time**.

---

## How `asyncio` Works

1. When the program starts, it creates an **event loop**.
2. When an `async` function is called, it creates a **coroutine object**, which is then wrapped into a **task** and registered to the event loop.
3. The event loop continuously polls these tasks and executes whichever is ready.
4. When a task reaches an `await` (e.g., waiting for I/O or sleeping), it **voluntarily yields control**, allowing the event loop to execute other tasks.
5. Once the awaited operation completes, the task resumes execution until the next `await` or it finishes.

## What is a Coroutine?

```python
async def main():
	print('hello')
	await asyncio.sleep(1)
	print('world')

core = main()
asyncio.run(core)
```

Any function defined with `async def` is a **coroutine function**. When invoked, it returns a **coroutine object**.

You can enter asynchronous mode using `asyncio.run()`. This function does two things:

1. It gives control to the event loop.
2. It turns the given coroutine into a task and runs it within the event loop.


## Multiple Tasks with Async

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

When you run a coroutine with `await`, the following happens:

1. The coroutine after `await` is wrapped into a task and registered with the event loop.
2. For example, when `main` encounters `await say_after(1, 'hello')`, it tells the event loop that `main` needs to wait for `say_after` to complete.
3. It then yields control to the event loop.
4. The return value of the awaited coroutine is preserved.

### Execution Trace

Output:

```
started at 18:08:35
hello
world
finished at 18:08:38
```

You can see a 3-second delay — this is because the two `say_after` coroutines were not registered at the same time. Here’s what happened:

1. `main` is registered as a task.
2. `print()` runs first.
3. `say_after(1, 'hello')` is registered as a task, and `main` yields control.
4. `say_after(1, 'hello')` is picked by the event loop.
5. `sleep` is registered as a task, and `say_after` yields control.
6. All tasks are now waiting; event loop pauses.
7. `sleep` completes, `say_after` resumes, prints `hello`.
8. `say_after` finishes and yields control.
9. Only `main` is left and resumes.
10. It encounters `await say_after(2, 'world')`, and the cycle repeats.
11. Finally, `print(finished at ...)` is executed.

Note: The event loop cannot forcefully take control. It must wait for a task to `await` or complete.


## `create_task()`

How can we register coroutines as tasks earlier? Python provides `create_task()`, which registers the coroutine as a task **without waiting**. It splits the responsibility of `await`.

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

Execution flow:

1. `main()` starts → registers `task1` and `task2`
2. Both tasks begin `say_after`, but hit `await asyncio.sleep(...)` and **immediately yield** control.
3. The event loop waits for the first to complete:

   * task1 wakes after 1 second
   * task2 after 2 seconds
4. After 1 second → task1 resumes and prints "hello"
5. After another second → task2 resumes and prints "world"
6. When both tasks are done, `main()` continues to print finish time.


## Await Multiple Tasks in One Line: `gather`

You can use `gather()` to await multiple tasks at once:

```python
await asyncio.gather(task1, task2)
```

This waits for **all** tasks to complete before continuing. It returns a list of results, in the same order as the tasks.

You can also pass coroutines directly into `gather()`, and it will register them as tasks automatically:

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

Output:

```
started at 18:37:29
hello
world
finished at 18:37:31
```

That’s all for this article! Hopefully, it helped you understand how `asyncio` works behind the scenes :D

