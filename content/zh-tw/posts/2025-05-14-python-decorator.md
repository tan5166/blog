---
title: 介紹 Python decorator 
date: 2025-05-14 22:30:42 +0800
categories: [Python, Python Basics]
tags: [decorator]     # TAG names should always be lowercase
math: false
---

在 Python 裏經常可以看到這樣的代碼：
```python
from numba import jit
import time

@jit
def fast_square_sum(n):
    total = 0
    for i in range(n):
        total += i * i
    return total

start = time.time()
print(fast_square_sum(10**6))
print("Spent time:", time.time() - start)
```
這個代碼本身的含義不重要，我們所關注的是當中 `@jit` 這個語法。這個語法就是所謂的 decorator.

## 什麼是 decorator
Decorator 的作用就是**包住原本的代碼，並且加上額外的行爲**，比如說，如果我們希望知道某函數運行的時間，我們其中一個寫法是：
```python
import time

def timer(func, *args, **kwargs):
	start = time.time()
	result = func(*args, **kwargs)
	end = time.time()
	print(f"{func.__name__} spent {end - start:.2f} s")
	return result
```
然後可以這樣使用：
```python
def slow_add(x, y):
	time.sleep(2)
	print(f"result is {x + y}")

timer(slow_add, 2, 3)
```
這樣的方法雖然很不錯，但 python 提供了我們一個更加簡便的寫法，也就是 decorator，我們可以這樣定義 `timer`：
```python
import time

def timer(func):
	def decorator(*args, **kwargs):
		start = time.time()
		result = func(*args, **kwargs)
		end = time.time()
		print(f"{func.__name__} spent {end - start:.2f} s")
		return result
	return decorator
```
也就是在 `timer` 函數內把我們要做的事情寫入，並且在最後把這個函數返回，然後我們就可以這樣調用：
```python
@timer
def slow_add(x, y):
	time.sleep(2)
	print(f"result is {x + y}")

slow_add(2, 3)
```
 這樣得到的效果與上面一樣，而且還能保證每次在使用 `slow_add` 的時候必然會計算時間。

> 使用 decorator 可以讓我們**不改變原始函數邏輯的情況下**，給它添加額外功能（像是計時、記錄日誌、權限驗證等等）。這讓程式碼更模組化、可重用，也更優雅。

## @wraps 的使用與緣由
此外，當我們寫一個 decorator 的時候，其實我們是用包裝函數去替代原始函數。這會導致：
```python
def my_decorator(func):
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper

@my_decorator
def greet():
    """Say hello"""
    print("Hello!")

print(greet.__name__)      # 輸出 'wrapper' 而不是 'greet'
print(greet.__doc__)       # 輸出 None 而不是 "Say hello"
```
爲了避免這種情況，我們可以使用 `@wraps`：
```python
from functools import wraps

def my_decorator(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper

@my_decorator
def greet():
    """Say hello"""
    print("Hello!")

print(greet.__name__)      # 輸出 'greet'
print(greet.__doc__)       # 輸出 'Say hello'
```
使用 `@wraps` 能讓我們最大地保留原始信息。
