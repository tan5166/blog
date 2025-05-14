---
title: Introduction to Python decorator 
date: 2025-05-14 22:30:42 +0800
categories: [Python, Python Basics]
tags: [decorator]     # TAG names should always be lowercase
math: false
---

You often see code like this in Python:

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

The actual meaning of this code isn't important here—what we're focusing on is the `@jit` syntax. This syntax is known as a **decorator**.

## What is a decorator

A decorator is used to **wrap existing code and add additional behavior**. For example, if we want to measure how long a function takes to run, one way to do it is:

```python
import time

def timer(func, *args, **kwargs):
    start = time.time()
    result = func(*args, **kwargs)
    end = time.time()
    print(f"{func.__name__} spent {end - start:.2f} s")
    return result
```

And we can use it like this:

```python
def slow_add(x, y):
    time.sleep(2)
    print(f"result is {x + y}")

timer(slow_add, 2, 3)
```

This approach works well, but Python gives us a more elegant way to write this using decorators. Here's how we can define a `timer` decorator:

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

We put the timing logic inside the `timer` function and return the new wrapped function. Now we can use the decorator like this:

```python
@timer
def slow_add(x, y):
    time.sleep(2)
    print(f"result is {x + y}")

slow_add(2, 3)
```

This produces the same effect as before, but it ensures that every time `slow_add` is used, it will automatically be timed.

> Using decorators allows us to **add functionality to existing functions without modifying their logic**. This makes our code more modular, reusable, and elegant.

## The use and purpose of @wraps

When we write a decorator, what we're really doing is **replacing the original function with a wrapper**. This leads to an issue:

```python
def my_decorator(func):
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper

@my_decorator
def greet():
    """Say hello"""
    print("Hello!")

print(greet.__name__)      # Outputs 'wrapper' instead of 'greet'
print(greet.__doc__)       # Outputs None instead of "Say hello"
```

To avoid this, we can use `@wraps`:

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

print(greet.__name__)      # Outputs 'greet'
print(greet.__doc__)       # Outputs 'Say hello'
```

Using `@wraps` helps preserve the original function's metadata as much as possible.

