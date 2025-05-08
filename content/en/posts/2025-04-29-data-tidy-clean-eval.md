---
categories:
- Data
- Data Basics
date: "2025-04-29T16:58:18Z"
math: false
tags:
- data
- pandas
title: Evaluating the Tidiness and Cleanliness of Data
---


As mentioned in the previous article, a high-quality dataset should be good in two aspects:

   - **Tidiness**: The structure of the dataset follows the three principles of tidy data (see the previous article).
   - **Cleanliness**: The data does not contain missing values, invalid/erroneous data, inconsistencies, or duplicates.

   So how do we evaluate whether a dataset is tidy and clean? This article introduces several practical methods to assess both.

   The article is divided into two parts:

   1. Evaluating tidiness (structure-related issues)
   2. Evaluating cleanliness (content-related issues)

   

   ## Evaluating Tidiness

   Structural issues are usually easier to spot than content issues. For example, it's easy to tell whether books are organized on a shelf just by looking, but harder to spot typos inside the books. Here are some useful tools to help identify structural problems:

   - `df.info()` — Gives an overview of the dataset, including column names and data types. This helps assess whether each column represents a single variable.
   - `df.head(n)`, `df.tail(n)`, `df.sample(n)` — Display actual rows to help you judge whether the dataset follows the tidy data principles.

   

   ## Evaluating Cleanliness

   ### Missing Values

   - Use `df.info()` to see how many non-null entries each column has, helping to identify columns with missing values.

   - Use `df["column_name"].isnull()` to check which rows in a column have missing values. This returns a Boolean Series. Combine with `.sum()` to count missing entries:

     ```python
     df["column_name"].isnull().sum()
     ```

   - Or check all columns at once:

     ```python
     df.isnull().sum()
     ```

   - You can also filter rows with missing values in a specific column:

     ```python
     df[df["column_name"].isnull()]
     ```

   ### Duplicate Values

   - Use:

     ```python
     df.duplicated(subset=["column1", "column2"])
     ```

     This checks for rows where the specified columns match a previous row. It returns a Boolean Series—`False` for the first occurrence and `True` for subsequent duplicates. Use it with filtering to find all duplicates:

     ```python
     df[df.duplicated(subset=["column1", "column2"])]
     ```

   ### Inconsistent Values

   - Use:

     ```python
     df["column_name"].value_counts()
     ```

     This displays the frequency of each unique value in a column, helping identify inconsistencies like `"Class 1"`, `"Class No 1"`, `"The first Class"` representing the same class.

   ### Invalid / Erroneous Data

   This type of issue is usually harder to detect, especially without domain knowledge. However, some basic checks include:

   1. `df.describe()` — Gives min, max, mean, and other stats to spot outliers.
   2. `df["column_name"].sort_values()` — Sorting values may help identify anomalies or outliers that deviate from expected ranges.

   
