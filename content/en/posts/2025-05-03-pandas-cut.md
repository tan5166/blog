---
categories:
- Data
- Data Basics
date: "2025-05-03T09:35:41Z"
math: false
tags:
- data
- pandas
title: Grouping Data with `cut`
---


When analyzing data like age groups, salary ranges, or grade levels, it's often not meaningful to analyze individual values. A more practical approach is to group continuous data into **intervals**, and then perform analysis on those groups.

This article introduces the basic usage of `pd.cut()` and how to combine it with `groupby()` for categorized statistical analysis.



## Basic Usage of `cut`

Suppose we have student score data, and we want to categorize the scores into three levels: "Fail", "Pass", and "Excellent", and then calculate the average score in each level.

Because scores are continuous, using `groupby()` directly would generate too many groups. Instead, we use **binning** to divide the scores into a few defined intervals using `pd.cut()`:

```python
df = pd.DataFrame({
    'Name': ['Ming', 'Mei', 'Qiang', 'An', 'Jie'],
    'Score': [55, 70, 82, 88, 93]
})
```

We want to divide them as:

- 0–60: Fail
- 60–80: Pass
- 80–100: Excellent

```python
df['Level'] = pd.cut(
    df['Score'],
    bins=[0, 60, 80, 100],
    labels=['Fail', 'Pass', 'Excellent'],
    right=True
)
```

### Parameter Explanation

| Parameter        | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| First argument   | The numeric Series to bin                                    |
| `bins`           | The interval edges; can be an integer (equal-width bins) or a list |
| `right`          | Whether to include the right edge (default is `True` → `(a, b]`) |
| `labels`         | Optional labels for each interval                            |
| `include_lowest` | Whether to include the lowest value in the first interval    |

> Note: If a value exceeds the maximum bin (e.g., Score > 100), the result will be `NaN`.

Result:

```
   Name  Score     Level
0  Ming     55      Fail
1   Mei     70      Pass
2 Qiang     82  Excellent
3    An     88  Excellent
4   Jie     93  Excellent
```



## Combine with `groupby` for Analysis

Once grouped, we can use `groupby()` to analyze each category.
 For example, calculate the average score for each level:

```python
df.groupby("Level")["Score"].mean()
```

Output:

```
Level
Fail        55.000000
Pass        70.000000
Excellent   87.666667
Name: Score, dtype: float64
```

By binning first and then analyzing, you can organize your data exploration in a clearer, more structured way.
