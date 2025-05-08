---
categories:
- Python
- Python Basics
date: "2025-04-26T17:06:32Z"
math: false
tags: []
title: Python Exception Handling
---

When writing programs, it’s common to encounter unexpected bugs or runtime errors. This article introduces common types of exceptions in Python and how we can catch and handle them.

## Common Exception Types

- Index out of range – `IndexError`
- Division by zero – `ZeroDivisionError`
- File not found – `FileNotFoundError`
- Type mismatch – `TypeError`
- And more...

## Catching Exceptions

Many errors are caused by improper usage by the user.
 For example, if you ask a user to input a number but they enter text instead, this can cause an exception and crash the program. From the user’s perspective, they might not even realize what they did wrong—they just see the program crash.

To avoid this, we need to **catch exceptions** and provide a user-friendly error message. In Python, this is done using `try` and `except` blocks:

```python
try:
  user_weight = float(input("Please enter your weight (kg):"))  
  user_height = float(input("Please enter your height (cm):"))
  user_BMI = user_weight / user_height ** 2
except ValueError:
  print("Input is not a number. Please restart the program and enter valid numbers.")
except ZeroDivisionError:
  print("Height cannot be zero. Please restart the program and enter a valid value.")
except:  # catches any other unknown error
  print("An unknown error occurred. Please restart the program.")
else:  # executes only if no exception occurs
  print(f"BMI: {user_BMI}")
finally:  # always runs, regardless of error
  print("Program has finished running.")
```
