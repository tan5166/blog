---
categories:
- Data
- Data Basics
date: "2025-05-01T18:06:20Z"
math: false
tags:
- data
- pandas
title: Concatenating and Merging DataFrames
---

In real-world data analysis, we often encounter datasets from different sources. For example, one table may contain customer information, and another may contain order records; or we may have transaction logs from different months. To analyze these datasets effectively, we need to combine them. There are three main methods:

- **Vertical concatenation** (stacking rows)
- **Horizontal concatenation** (aligning columns side by side)
- **Merging** (similar to SQL joins)



## Concatenating DataFrames

### Vertical Concatenation

If you have two datasets with the same structure (i.e., same column names), such as transactions from two months, you can stack them using `pd.concat()`:

```python
pd.concat([df1, df2])
```

By default, this preserves the original indices. If you'd like to reset the index:

```python
pd.concat([df1, df2], ignore_index=True)
```

This creates a new 0-based index.



### Horizontal Concatenation

To combine datasets side by side (i.e., merge columns):

```python
pd.concat([df1, df2], axis=1)
```

This aligns data by index. Make sure that `df1` and `df2` share the same index, or `NaN` will be introduced for unmatched rows.



## Merging DataFrames

### Using `merge`

If you’re familiar with SQL joins, `pandas.merge()` offers similar functionality. For example, if you have an `orders` table and a `customers` table, and both use `CustomerID` as a key:

```python
df_result = pd.merge(df_orders, df_customers, on="CustomerID", how="inner")
```

| Parameter              | Description                                                  |
| ---------------------- | ------------------------------------------------------------ |
| `on`                   | Specifies the common column to join on                       |
| `left_on` / `right_on` | Use when the join keys have different names in the two DataFrames |
| `how`                  | Join method: `"inner"` (intersection), `"outer"` (union), `"left"`, `"right"` |



### Using `join`

To merge DataFrames based on their index rather than columns:

```python
df_result = df1.join(df2, how="left", lsuffix="_left", rsuffix="_right")
```

- By default, `join()` merges on index
- If both DataFrames have columns with the same name, use `lsuffix` and `rsuffix` to disambiguate them

