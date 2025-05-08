---
categories:
- Data
- Data Basics
date: "2025-05-06T14:59:27Z"
math: true
tags:
- data
- pandas
title: Converting Categorical Variables with `get_dummies`
---

When performing linear regression, we often encounter **categorical variables** like gender (`male`/`female`), region (`north`/`south`/`west`), etc.
 However, linear regression only accepts **numerical** data.
 This means we must first convert categorical (text) variables into a numeric format before fitting the model.

In such cases, the `pandas` function `get_dummies()` becomes a very handy tool.
 It converts categorical variables into a set of binary (0 and 1) columns—a process known as **One-Hot Encoding**.
 This article introduces how to use `get_dummies()` and explains its importance before running linear regression.



## Basic Syntax

Usage is simple:

```python
pd.get_dummies(df, columns=["col_name"], dtype=int)
```

Just pass the column(s) you want to encode into `get_dummies()`.



## Why Drop One Column?

Generally, we don’t want the resulting dummy variables to be highly correlated. In fact, if the columns are **linearly dependent**, the linear regression equation becomes unsolvable.

Recall that in linear regression, we solve:

$$\mathbf{y} = \mathbf{X}\beta + \epsilon$$

Using least squares estimation, the formula is:

$$\beta = (\mathbf{X}^T\mathbf{X})^{-1} \mathbf{X}^T \mathbf{y}$$

But if some columns in $\mathbf{X}$ are **linearly dependent**, then $\mathbf{X}^T\mathbf{X}$ becomes a **singular matrix**, and we cannot compute its inverse.

---

Since dummy variables generated from categorical values are mutually exclusive, they are inherently dependent.
 Therefore, we typically **drop one column** after one-hot encoding to avoid linear dependence.

Use the `drop_first=True` argument:

```python
pd.get_dummies(df, columns=["col_name"], dtype=int, drop_first=True)
```

This will drop the first category and retain the rest, ensuring the design matrix stays full-rank.

> Tip: Use `df.corr()` to inspect correlations between variables.
