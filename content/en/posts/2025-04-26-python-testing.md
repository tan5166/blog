---
categories:
- Python
- Python Basics
date: "2025-04-26T17:53:41Z"
math: false
tags: []
title: Python Testing
---

Since it's impossible to guarantee that programs will never have bugs after being released, we need to test them before delivery to reduce potential errors. This article introduces basic `assert` statements and Python’s built-in `unittest` library.

## Assert

`assert` is a keyword in Python used for simple testing. To use it, place an expression that should evaluate to `True` after `assert`:

```python
assert len("Hi") == 2
```

If the condition is `True`, nothing happens. If it’s `False`, the program immediately stops and throws an `AssertionError`. While this alerts us to a problem, it also means the program halts right away, so we can't know if there are additional issues later in the code.

## Unit Test

To solve the issue above, we use a dedicated testing library that allows us to run multiple test cases and clearly see which ones pass or fail.

`unittest` is a commonly used unit testing library in Python. Unit testing means verifying the smallest testable parts of an application, such as checking if a function behaves as expected.

Example: Suppose this is a function in our program `calculator.py`:

```python
def adder(x, y):
  return x + y  
```

Then the corresponding test code might be:

```python
import unittest
from calculator import adder

class TestAdder(unittest.TestCase):
  def test_positive_with_positive(self):
    self.assertEqual(adder(5, 3), 8)
    
  def test_neg_with_neg(self):
    self.assertEqual(adder(-10, -2), -12)
```

Each test case is a method under a test class, and its name must start with `test_`. Only methods prefixed with `test_` will be run as test cases.

Once written, just run the file and you’ll see the results. Each `.` means a test case passed; `F` means it failed.

`unittest` provides more assertions beyond `assertEqual`. Also, since each test runs independently, you often need to create objects repeatedly. To avoid redundant code, use the `setUp` method—it runs once before each test case.

Example without `setUp`:

```python
import unittest
from sentence import Sentence

class TestSentence(unittest.TestCase):
  def test_str_count(self):
    sentence = Sentence("hello world!")
    self.assertEqual(sentence.str_count(), 12)

  def test_word_count(self):
    sentence = Sentence("hello world!")
    self.assertEqual(sentence.word_count(), 2)

  def test_upper(self):
    sentence = Sentence("hello world!")
    self.assertEqual(sentence.upper(), "HELLO WORLD!")
```

Example using `setUp`:

```python
import unittest
from sentence import Sentence

class TestSentence(unittest.TestCase):
  def setUp(self):
    self.sentence = Sentence("hello world!")

  def test_str_count(self):
    self.assertEqual(self.sentence.str_count(), 12)

  def test_word_count(self):
    self.assertEqual(self.sentence.word_count(), 2)

  def test_upper(self):
    self.assertEqual(self.sentence.upper(), "HELLO WORLD!")
```

## Further Reading

- [(Recommended) Bay Area Notes - Use `unittest` to make your code more reliable](https://bayareanotes.com/python-unittest/)
- [Python Documentation - unittest](https://docs.python.org/zh-tw/3/library/unittest.html)
- [Tzing Blog - Using unittest](https://blog.tzing.tw/posts/python-testing-use-builtin-unittest-19e9cbe4)
