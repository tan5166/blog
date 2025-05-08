---
categories:
- Data
- Data Basics
date: "2025-04-30T17:28:20Z"
math: false
tags:
- data
- pandas
title: Making Data Clean — Cleaning Dataset Content
---


When performing data analysis, problems in the dataset’s content can significantly affect your results. For a description of what constitutes “dirty” data, see: [Evaluating the Tidiness and Cleanliness of Data](../2025-04-29-data-tidy-clean-eval/). This article explains how to use tools in pandas to clean problematic content and make your data clean.



## Handling Missing Data

### Manually Filling Missing Values

Missing values are common in real-world datasets. Sometimes you may need to manually fill in the missing entries.

#### Direct Assignment

If an entire column is missing, you can use:

```python
df["col_name"] = value
```

To fill a specific cell using `.loc` or `.iloc`:

```python
df.loc[index, "col_name"] = value
```

#### Using `fillna`

Instead of manually locating missing values, you can use `fillna`. For example, to fill missing values in a column with 0:

```python
df["col_name"].fillna(0)
```

To fill multiple columns with different values, pass a dictionary:

```python
df.fillna({"col1": value1, "col2": value2})
```

### Deleting Rows with Missing Values

If you prefer to drop rows with missing data:

```python
df.dropna()
```

This drops any row that contains at least one `NaN`.

To only drop rows if specific columns are missing:

```python
df.dropna(subset=["col1", "col2"])
```



## Handling Duplicates

You can remove duplicate rows with:

```python
df.drop_duplicates(subset=None, keep='first')
```

- `subset`: specify which columns to use when identifying duplicates.
- `keep`:
  - `'first'` (default): keep the first occurrence
  - `'last'`: keep the last
  - `False`: drop all duplicates



## Handling Inconsistent Data

When values are inconsistent (e.g., `"M"`, `"male"`, `"boy"`), use `replace` to standardize them:

```python
df["Gender"].replace(["M", "boy"], "male")
```

To map multiple values using a dictionary:

```python
df["Gender"].replace({"M": "male", "F": "femele"})
```

> Note: these operations do **not** modify the original DataFrame unless you add `inplace=True`.
