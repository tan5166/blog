---
categories:
- Data
- Data Basics
date: "2025-04-29T21:25:45Z"
math: false
tags:
- data
- pandas
title: Making Data Tidy — Structuring Datasets
---

When performing data analysis, datasets are often structured for human readability rather than for machine-friendly analysis. As mentioned in previous articles, tidy data follows certain principles. This article explains how to use pandas to restructure datasets into tidy formats.



## Splitting and Merging Columns

### Horizontally Splitting a String Column into Multiple Columns

Suppose you have a column with values like `"height/weight"`. You can split it using:

```python
df["Height/Weight"].str.split("/")
```

This returns a list of strings per row. To expand them into separate columns:

```python
df["Height/Weight"].str.split("/", expand=True)
```

To store the result back into the DataFrame:

```python
df[["Height", "Weight"]] = df["Height/Weight"].str.split("/", expand=True)
```

Don't forget to drop the original column:

```python
df.drop("Height/Weight", axis=1, inplace=True)
```



### Vertically Splitting a List Column into Multiple Rows

If a column contains lists like this:

```
    Name         Hobbies
0   Alice   [Basketball, Soccer, Swimming]
1   Bob     [Music, Painting]
```

You can explode it into multiple rows:

```python
df_exploded = df.explode("Hobbies")
```



### Merging Columns

If you have separate `"First Name"` and `"Last Name"` columns and want to merge them into a `"Full Name"` column:

```python
df["Full Name"] = df["First Name"].str.cat(df["Last Name"], sep=" ")
```

Then drop the original columns if needed.



## Convert Wide Data to Long Data

Consider this "wide" format that records patient measurements. Because not every patient undergoes the same tests, many columns may contain `NaN`. A better approach is to convert it into a "long" format.

**Wide format:**

| Patient ID | Blood Pressure | Blood Sugar | Heart Rate |
| ---------- | -------------- | ----------- | ---------- |
| 001        | 120            | 90          | 80         |
| 002        | 130            | NaN         | 85         |

To convert it into long format:

```python
df_long = pd.melt(df, id_vars=["Patient ID"], var_name="Measurement", value_name="Value")
```

**Result:**

```
  Patient ID Measurement   Value
0        001   Blood Pressure  120.0
1        002   Blood Pressure  130.0
2        001   Blood Sugar      90.0
3        002   Blood Sugar       NaN
4        001   Heart Rate       80.0
5        002   Heart Rate       85.0
```

**Explanation of Parameters:**

| Parameter                | Description                                                  |
| ------------------------ | ------------------------------------------------------------ |
| `id_vars=["Patient ID"]` | Fixed column(s) to keep (e.g., identifiers)                  |
| `var_name="Measurement"` | New column to store former column names (e.g., "Blood Pressure") |
| `value_name="Value"`     | New column to store actual values                            |
