---
categories:
- Data
- Data Basics
date: "2025-05-03T18:24:47Z"
math: false
tags:
- data
- pandas
title: Filtering Data with query()
---


When analyzing data, we often need to filter rows based on certain conditions.
 In addition to traditional Boolean indexing, Pandas provides a cleaner and SQL-like syntax: `query()`.

This article uses simple examples to show how to filter data using `query()`.

Here’s an example dataset:

```python
import pandas as pd

data = {
    'Class': ['A', 'A', 'B', 'B', 'C', 'C'],
    'Name': ['Ming', 'Mei', 'Hua', 'Qiang', 'An', 'Jie'],
    'Gender': ['M', 'F', 'M', 'M', 'F', 'M'],
    'Score': [85, 90, 78, 82, 95, 70]
}

df = pd.DataFrame(data)
print(df)
```



## Filter with a Single Condition

To find students with scores above 80:

```python
df.query('Score > 80')
```

Result:

|      | Class | Name  | Gender | Score |
| ---- | ----- | ----- | ------ | ----- |
| 0    | A     | Ming  | M      | 85    |
| 1    | A     | Mei   | F      | 90    |
| 3    | B     | Qiang | M      | 82    |
| 4    | C     | An    | F      | 95    |



## Filter with Multiple Conditions

You can combine conditions using `and` / `or`.
 For example, to find male students with scores above 80:

```python
df.query('Score > 80 and Gender == "M"')
```

Result:

|      | Class | Name  | Gender | Score |
| ---- | ----- | ----- | ------ | ----- |
| 0    | A     | Ming  | M      | 85    |
| 3    | B     | Qiang | M      | 82    |

