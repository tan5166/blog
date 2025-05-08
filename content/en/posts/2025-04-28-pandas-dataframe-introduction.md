---
categories:
- Python
- Python Basics
date: "2025-04-28T18:46:41Z"
math: false
tags:
- pandas
- data
title: Introduction to Pandas — DataFrame
---

Following the previous article on `Series`, this article introduces the `DataFrame` in `pandas`.

## Creating a DataFrame

A DataFrame can be imagined as a dictionary composed of multiple Series. Each column can have a different data type, and every column has its own name. Here's how to create a DataFrame:

```python
import pandas as pd

# Create three Series
s_id    = pd.Series(["01", "02", "03", "04", "05"])
s_class = pd.Series(["Class B", "Class A", "Class B", "Class C", "Class A"])
s_grade = pd.Series([92, 67, 70, 88, 76])

# Create a DataFrame
df1 = pd.DataFrame({
    "Student ID":  s_id,
    "Class":       s_class,
    "Grade":       s_grade
})
```

Output:

```
  Student ID   Class  Grade
0         01  Class B     92
1         02  Class A     67
2         03  Class B     70
3         04  Class C     88
4         05  Class A     76
```

You can also pass lists directly instead of Series, and if the Series has custom indexes, those will be used as the DataFrame’s index as well.

## Common Attributes

- `dataframe.index`: returns all row indices
- `dataframe.columns`: returns all column names
- `dataframe.values`: returns the data as a NumPy array
- `dataframe.T`: returns the transposed DataFrame

## Extracting Columns

- `df["column_name"]` or `df.column_name` (if the column name is a valid identifier)
- To select multiple columns: `df[["col1", "col2"]]`

## Extracting Rows

- Use `.loc` for label-based indexing and `.iloc` for position-based indexing (see the `Series` article)
- `df.loc[["row1", "row2"]]` selects multiple rows
- `df.loc["row", "column"]` selects a specific cell; you can also use slices

## Conditional Row Filtering

Just like with Series, you can filter rows with conditions:

```python
df[df["column"] > 20]
```

## Adding/Modifying Columns

You can assign a new or existing column name and set the values:

- `df["col"] = pd.Series([values], index=[index])` — ensure matching indices
- `df["col"] = [values]` — aligns by position
- If the column doesn't exist, it will be added

## Adding/Modifying Rows

Use `df.loc[new_index] = [values]`. Note: you can't use `iloc` for this.

## Deleting Rows/Columns

- Delete rows: `df.drop(row_name)`
- Delete columns: `df.drop(column_name, axis=1)`

Both return a new DataFrame and do not modify the original.

## DataFrame Arithmetic

When performing arithmetic between DataFrames, Pandas aligns both row indices and column names. If they don’t match, the result is `NaN`. To fill missing values, use:

```python
df1.add(df2, fill_value=0)
```

You can replace `add` with `sub`, `mul`, or `div`.

## Operations Between DataFrame and Series

When operating between a DataFrame and a Series, the Series is aligned with the DataFrame’s columns.

Example:

**DataFrame:**

```
          Math  English  Science
Alice       80       85       88
Bob         90       95       92
Charlie     70       75       78
```

**Series:**

```
Math       5
English    3
Science    2
dtype: int64
```

**Result (DataFrame + Series):**

```
          Math  English  Science
Alice       85       88       90
Bob         95       98       94
Charlie     75       78       80
```

Each row is element-wise added to the Series.

## Common Methods

- `df.head(n)`: returns the first `n` rows
- `df.describe()`: returns statistical summary for each column
- `df.mean()`: returns column-wise average (default `axis=0`); use `axis=1` for row-wise

## Apply and Applymap

To apply a custom function to each column or row:

```python
df = pd.DataFrame({
    "Math": [92, 85, 70, 88, 76],
    "English": [67, 80, 90, 60, 75],
    "Science": [70, 65, 85, 90, 80]
})

def trimmed_mean(x):
    return (x.sum() - x.max() - x.min()) / (len(x) - 2)

result = df.apply(trimmed_mean)
print("\nTrimmed mean (excluding max and min):")
print(result)
```

Output:

```
Math       83.000000
English    74.000000
Science    78.333333
dtype: float64
```

- Use `axis=1` to apply to rows
- Use `df.applymap()` to apply a function to **each element**, e.g.:

```python
df.applymap(lambda x: x + 5)
```
