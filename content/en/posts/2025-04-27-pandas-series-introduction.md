---
categories:
- Python
- Python Basics
date: "2025-04-27T21:22:20Z"
math: false
tags:
- pandas
- data
title: Introduction to Pandas — Series
---

Pandas is a Python-based data processing and analysis tool that provides efficient and flexible data structures, making it easier to work with structured data such as tables or time series. Built on top of NumPy, Pandas leverages its efficient numerical computing capabilities while offering higher-level interfaces like `DataFrame` and `Series`, enabling more intuitive and powerful data manipulation. This article introduces the `Series` object in Pandas.

## Series

A `Series` is a one-dimensional data structure with an index, similar to an array with named labels. Each data value has a corresponding index, which allows for quick access and manipulation. Even if the order of data changes, you can still locate values easily using their index. Creating a `Series` is simple:

```python
import pandas as pd

data = pd.Series([10, 20, 30, 40, 50])
print(data)
```

This outputs:

```
0    10
1    20
2    30
3    40
4    50
dtype: int64
```

The left column shows the index, and the right column shows the values. You can also define your own custom index:

```python
import pandas as pd

data = pd.Series([10, 20, 30, 40, 50], index=['a', 'c', 'b', 'f', 'k'])
print(data)
```

This will output:

```
a    10
c    20
b    30
f    40
k    50
dtype: int64
```

With custom indexing, you can retrieve elements using their labels (e.g., `data["a"]`). You can still use the original index as well. To distinguish between them:

- **Positional Indexing**: e.g., `data[1:3]` — excludes the end index
- **Label Indexing**: e.g., `data["a":"c"]` — includes the end index

You can also use a list to index:

```python
data[["f", "a", "k"]]
```

Output:

```
f    40
a    10
k    50
dtype: int64
```

## `loc` and `iloc`

You can use integers as labels too, which might lead to confusion. Here's what happens:

- `data[...]` uses label-based indexing when accessing a single element
- `data[...]` uses positional indexing when slicing

To avoid this confusion, Pandas provides:

- `loc` for label-based indexing
- `iloc` for position-based indexing

Example:

```python
data.iloc[3]
```

## Conditional Filtering

Just like NumPy arrays, you can filter `Series` with conditions:

```python
data[(data > 20) | (data < 40)]
```

## Creating a Series from a Dictionary

You can also create a `Series` by passing a dictionary:

```python
data = pd.Series({
    "Lettuce": 4.1,
    "Daikon": 2.2,
    "Tomato": 5.3,
    "Potato": 3.7,
    "Cucumber": 6.8
})
```

The keys become the index.

## Arithmetic Operations

You can perform arithmetic on Series. Only elements with matching indices are computed together; others result in `NaN`:

```python
s1 = pd.Series([1, 2, 3, 4, 5], index=['a', 'b', 'c', 'd', 'e'])
s2 = pd.Series([50, 40, 30, 20, 10], index=['a', 'b', 'd', 'e', 'f'])

s1 + s2
```

Results in:

```
a    51.0
b    42.0
c     NaN
d    34.0
e    25.0
f     NaN
dtype: float64
```

To fill missing values with a default value:

```python
s1.add(s2, fill_value=0)
```

Results in:

```
a    51.0
b    42.0
c     3.0
d    34.0
e    25.0
f    10.0
dtype: float64
```

## Common Methods

- `min`, `max`, `mean`, `sum`: basic statistics
- `describe()`: returns a summary of statistics

## Applying Functions to Each Element

To apply a function to each element (e.g., assigning grades based on scores):

```python
def grade_from_score(score):
  if score >= 80:
    return "A"
  elif score >= 60:
    return "B"
  else:
    return "C"
```

Use `apply` to apply the function:

```python
grades = scores.apply(grade_from_score)
```

You can also pass a lambda (anonymous) function — see the blog's related article for more.
