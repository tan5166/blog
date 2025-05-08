---
categories:
- Data
- Data Basics
date: "2025-04-29T18:17:25Z"
math: false
tags:
- data
- pandas
title: Cleaning Index and Column Names in Data
---

The first step in cleaning a dataset is to organize and standardize the index and column names to avoid confusion and inconsistencies. This includes renaming index and column labels, as well as sorting them.

### Rename Index and Column Names Using a Dictionary

To clean index and column names, you can use the `rename` method with a dictionary to map old names to new names:

```python
df.rename(index={"old_index_1": "new_index_1", "old_index_2": "new_index_2"})
```

To rename column names, simply use the `columns` keyword instead of `index`.
 By default, this returns a new DataFrame without modifying the original.
 To update the original DataFrame directly, add the `inplace=True` argument:

```python
df.rename(index={"old_index_1": "new_index_1"}, inplace=True)
```

### Rename with a Function

If you want to rename all index or column names using a function, such as converting all column names to uppercase:

```python
df.rename(columns=str.upper, inplace=True)
```

This is especially helpful when applying the same transformation to all labels.

### Sorting Index or Column Names

To sort the index or column names, you can use:

```python
df.sort_index(axis=0)  # axis=0 for index, axis=1 for column names
```

Like before, this returns a new DataFrame. To modify the original DataFrame in-place:

```python
df.sort_index(axis=0, inplace=True)
```
