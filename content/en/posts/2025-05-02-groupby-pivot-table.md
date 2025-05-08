---
categories:
- Data
- Data Basics
date: "2025-05-02T15:25:30Z"
math: false
tags:
- data
- pandas
title: Generating Tidy Summary Tables with groupby / pivot_table
---

In data analysis, it's common to generate summary tables grouped by categories.
 For example, given a table of student test scores, we might want to know the **average score per class**.

```python
data = {
    'Class': ['A', 'A', 'B', 'B', 'B', 'C', 'C'],
    'Name': ['Ming', 'Mei', 'Hua', 'Qiang', 'Mei', 'An', 'Jie'],
    'Gender': ['M', 'F', 'M', 'M', 'F', 'F', 'M'],
    'Score': [85, 90, 78, 82, 88, 95, 91],
    'Absences': [2, 0, 3, 1, 0, 0, 2]
}

df = pd.DataFrame(data)
```



## groupby

### Basic Syntax

`df.groupby("column")` splits the DataFrame into groups. For example, `df.groupby("Class")` will split the data into groups A, B, and C. To view statistics, you need to select specific columns and apply aggregation functions like `mean`, `sum`, etc.

```python
df.groupby("Class")["Score"].mean()
```

Result:

```
Class
A    87.5
B    82.67
C    93.0
```

To aggregate multiple columns:

```python
df.groupby("Class")[["Score", "Absences"]].mean()
```

| Class | Score   | Absences |
| ----- | ------- | -------- |
| A     | 87.5000 | 1.000000 |
| B     | 82.6667 | 1.333333 |
| C     | 93.0000 | 1.000000 |

Grouping by multiple columns (e.g., `Class` and `Gender`):

```python
df.groupby(["Class", "Gender"])[["Score", "Absences"]].mean()
```

| Class | Gender | Score | Absences |
| ----- | ------ | ----- | -------- |
| A     | F      | 90.0  | 0.0      |
|       | M      | 85.0  | 2.0      |
| B     | F      | 88.0  | 0.0      |
|       | M      | 80.0  | 2.0      |
| C     | F      | 95.0  | 0.0      |
|       | M      | 91.0  | 2.0      |



### Multiple Aggregation Functions

Use `agg` to apply multiple aggregation functions at once:

```python
df.groupby("Class")["Score"].agg(['mean', 'sum'])
```

| Class | mean  | sum  |
| ----- | ----- | ---- |
| A     | 87.5  | 175  |
| B     | 82.67 | 248  |
| C     | 93.0  | 186  |



### Custom Aggregation Function

Define your own function and use it with `apply`:

```python
df.groupby("Class")["Score"].apply(custom_function)
```



## pivot_table

While `groupby` is powerful, `pivot_table` makes it easier to generate tabular reports. It's ideal for transforming data into a readable table format with rows and columns.

### Basic Usage

```python
pd.pivot_table(df, index="Class", values="Score", aggfunc="mean")
```

| Class | Score |
| ----- | ----- |
| A     | 87.5  |
| B     | 82.67 |
| C     | 93.0  |

Calculate multiple fields:

```python
pd.pivot_table(df, index="Class", values=["Score", "Absences"], aggfunc="mean")
```



### Add Column Grouping

To view the average score by class and gender:

```python
pd.pivot_table(df, index="Class", values="Score", columns="Gender", aggfunc="mean")
```

| Gender | F    | M    |
| ------ | ---- | ---- |
| Class  |      |      |
| A      | 90.0 | 85.0 |
| B      | 88.0 | 80.0 |
| C      | 95.0 | 91.0 |



### Multiple Values + Multiple Columns

To view average **Score** and **Absences** by **Class** and **Gender**:

```python
pd.pivot_table(
    df,
    values=["Score", "Absences"],
    index="Class",
    columns="Gender",
    aggfunc="mean"
)
```

<table border="1" class="dataframe">
  <thead>
    <tr>
      <th></th>
      <th colspan="2" halign="left">Score</th>
      <th colspan="2" halign="left">Absences</th>
    </tr>
    <tr>
      <th>Gender</th>
      <th>F</th>
      <th>M</th>
      <th>F</th>
      <th>M</th>
    </tr>
    <tr>
      <th>Class</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>A</th>
      <td>90.0</td>
      <td>85.0</td>
      <td>0.0</td>
      <td>2.0</td>
    </tr>
    <tr>
      <th>B</th>
      <td>88.0</td>
      <td>80.0</td>
      <td>0.0</td>
      <td>2.0</td>
    </tr>
    <tr>
      <th>C</th>
      <td>95.0</td>
      <td>91.0</td>
      <td>0.0</td>
      <td>2.0</td>
    </tr>
  </tbody>
</table>
