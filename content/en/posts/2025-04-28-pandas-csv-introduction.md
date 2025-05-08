---
categories:
- Python
- Python Basics
date: "2025-04-28T21:56:26Z"
math: false
tags:
- pandas
- csv
- data
title: Introduction to Pandas — Working with CSV
---

## Reading CSV Files

Reading a CSV file in Pandas is very straightforward. All you need is:

```python
df = pd.read_csv("path")
```

This single line loads the CSV file. By default, Pandas uses the **first row** of the file as column headers. If the CSV file has no header row, you can specify:

```python
df = pd.read_csv("path", header=None)
```

By default, the **first column** is not used as the index. If you want to use a specific column as the index:

```python
df = pd.read_csv("path", index_col="column_name")
```

## Displaying Data

When the file contains many columns, Pandas may truncate the display and hide some columns. If you want to see all columns, you can use:

```python
pd.set_option("display.max_columns", num)
```

Where `num` is the number of columns you want to show.

Sometimes, a column contains values that are too long and get truncated. To change the maximum column width shown:

```python
pd.set_option("display.max_colwidth", num)
```
