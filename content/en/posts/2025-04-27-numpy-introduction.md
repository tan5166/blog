---
categories:
- Python
- Python Basics
date: "2025-04-27T16:14:02Z"
math: false
tags:
- numpy
- data
title: Introduction to Numpy
---

In data analysis, machine learning, and scientific computing, efficiently handling data is essential. Numpy is a simple and powerful Python library that provides efficient array computation. This article introduces Numpy, including basic syntax, attributes, and common operations.

## Introduction

The main data structure in Numpy is the array. Arrays are similar to Python lists, with one key difference: a Numpy array can only store elements of the same type, unlike lists which can contain mixed types. Numpy also provides many mathematical functions, such as computing the median, mean, variance, and more.

## Creating Arrays in Numpy

To use Numpy, we must first import it—typically with the alias `np`:

```python
import numpy as np
```

The simplest way to create an array is to convert a list using `np.array`:

```python
arr1 = np.array([1, 2, 3])
arr2 = np.array([[1, 2, 3], [4, 5, 6]])  # a 2D array
```

### Other Methods to Create Arrays

- `np.zeros(n)`: Creates an array of length `n` filled with zeros. You can also specify a shape, such as `np.zeros((2, 3))` for a 2×3 array.
- `np.ones(n)`: Creates an array of length `n` filled with ones.
- `np.arange(start, end, step)`: Creates an array like `[start, start + step, start + 2*step, ...]`. The final element is less than `end`, so `end` is not included.

## Array Attributes

Numpy arrays have some useful attributes:

- `ndim`: Returns the number of dimensions.
- `shape`: Returns the shape of the array. For example, `arr2` is a 2×3 array, so it returns `(2, 3)`.
- `dtype`: Returns the data type, such as `int64`.
- `itemsize`: Tells you how many bytes each element occupies.

## Common Operations

### Concatenation

`np.concatenate` is used to combine arrays:

```python
arr1 = np.array([1, 2, 3])
arr2 = np.array([4, 5, 6])
arr3 = np.array([7, 8, 9])
np.concatenate((arr1, arr2, arr3), axis=0)
```

Here, `axis=0` means stacking them row-wise. Since `arr1`, `arr2`, and `arr3` all have shape `(3,)`, the final result is a `(9,)` array: `[1, 2, 3, ..., 9]`.
 Note: You cannot concatenate along `axis=1` unless the arrays are reshaped.

### Reshape

`reshape` changes the shape of an array. For example, to convert `arr1` to shape 1×3:

```python
arr1 = arr1.reshape(1, 3)
```

To stack arrays side by side like this:

```
[[1 2 3]
 [4 5 6]
 [7 8 9]]
```

You need to reshape each array to 3×1, then concatenate along `axis=1`:

```python
arr1 = arr1.reshape(3, 1)
arr2 = arr2.reshape(3, 1)
arr3 = arr3.reshape(3, 1)

result = np.concatenate((arr1, arr2, arr3), axis=1)
```

### Sorting

Numpy offers two ways to sort an array:

- `np.sort(arr)`: Returns a sorted copy of the array. The original array remains unchanged.
- `arr.sort()`: Sorts the array in-place, modifying the original array.

### Indexing

In addition to positive indices, you can use negative indices to access elements from the end. For example, `arr[-1]` returns the last element, `arr[-2]` returns the second-to-last, etc.

You can also use slicing to get subarrays, such as `arr[1:4]` to get elements with indices 1 through 3 (the end index is exclusive).

Lastly, you can use conditional filtering to get elements that match certain criteria. For example:

```python
arr[(arr > 2) & (arr < 10)]
```

This returns all elements greater than 2 and less than 10.
