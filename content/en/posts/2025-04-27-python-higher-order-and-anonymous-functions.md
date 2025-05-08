---
categories:
- Python
- Python Basics
date: "2025-04-27T00:18:42Z"
math: false
tags: []
title: Python Higher-Order and Anonymous Functions
---

## Higher-Order Functions

In Python, functions can be passed as arguments to other functions. A function that accepts another function as an argument is called a **higher-order function**, which allows for more flexible and reusable code. Example:

```python
def calculate_and_print(num, calculator):
  result = calculator(num)
  print(f"num: {num}, result: {result}")
```

## Anonymous Functions

Sometimes, a function is only used once and giving it a name feels unnecessary. This is where **anonymous functions** come in handy:

```python
calculate_and_print(7, lambda num: num * num)
```

If the function takes multiple arguments, just list them before the colon. For example:
 `lambda num1, num2: num1 + num2`

You can also call an anonymous function directly:

```python
(lambda num1, num2: num1 + num2)(2, 3)
```

Note: Anonymous functions should be kept simple and concise.
