---
categories:
- Data
- Data Basics
date: "2025-05-03T09:35:41Z"
math: false
tags:
- data
- pandas
title: 用 cut 對數據分組
---

當我們想分析不同年齡層、薪資等級或成績分段的資料時，直接針對每一個具體數值進行統計往往沒什麼意義。更常見的做法是：先把連續的數據切割成「區間」，再針對每個區間進行統計分析。

這篇文章會介紹 `pd.cut()` 的基本用法，並搭配 `groupby()`，讓你能輕鬆地對數據做分類統計。



## cut 的基本用法

假設我們有一份學生成績資料，我們想把學生分為三個等級：「不及格」、「及格」、「優秀」，並統計每個等級中學生的平均分數。

因為分數是連續數值，我們不能直接用 `groupby()` 來分組，這會讓我們分出非常多組，所以需要先把分數「分箱」（binning）成幾個區間。這時候，就可以使用 `pd.cut()`。例子：

```python
df = pd.DataFrame({
    '姓名': ['小明', '小美', '小強', '小安', '小杰'],
    '分數': [55, 70, 82, 88, 93]
})
```

我們的目標是將這些學生依照分數劃分為三類：

- 0–60 分：不及格
- 60–80 分：及格
- 80–100 分：優秀

我們可以這樣使用 `pd.cut`:

```python
df['等級'] = pd.cut(
    df['分數'],
    bins=[0, 60, 80, 100],
    labels=['不及格', '及格', '優秀'],
    right=True
)
```

參數的說明如下：

| 參數             | 說明                                                        |
| ---------------- | ----------------------------------------------------------- |
| 第一個位置       | 要被切分的數值資料（通常是一個 Series）                     |
| `bins`           | 分組的邊界，可以是整數（代表平均分成幾組）或指定區間的 list |
| `right`          | 區間是否包含右邊界，預設是 `True`（即 `(a, b]`）            |
| `labels`         | 是否指定每一組的名稱                                        |
| `include_lowest` | 是否讓最小值包含在第一個區間內                              |

> 如果有數值大於我們的最大分組，例如：有人的分數大於100，則會被分類為 NaN.



我們會得到：

```python
   姓名  分數   等級
0  小明  55  不及格
1  小美  70   及格
2  小強  82   優秀
3  小安  88   優秀
4  小杰  93   優秀
```



## 結合 groupby 進行分析

分組好了以後，我們便能夠使用我們的分組來進行分析，例如我們想要知道每個等級的平均分數是多少：

```python
df.groupby("等級")["分數"].mean()
```

就能得到：

```
等級
不及格    55.000000
及格     70.000000
優秀     87.666667
Name: 分數, dtype: float64
```

先對數據進行分箱，再利用分箱結果進行分析，這樣的方式可以讓後續的統計與資料探索變得更有條理。
