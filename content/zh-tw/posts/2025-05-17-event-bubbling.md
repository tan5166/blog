---
title: 當你點擊按鈕時發生了什麼？ JavaScript 的事件冒泡機制
date: 2025-05-17 22:41:00 +0800
categories: [Web Development, JavaScript]
tags: [dom, javascript, html] # TAG names should always be lowercase
math: false
---

在一個複雜的網頁裏，我們常常會對多層嵌套的元素加上不同的事件監聽器。以以下這段 HTML 為例：

```html
<div id="parent">
  <button id="child">Click me</button>
</div>
```

現在，假設我們分別在 `div` 和 `button` 上都綁定了事件監聽器`click`：

```javascript
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});
```

那究竟哪個事件監聽器會在我們點擊按鈕的時候先被觸發呢？

## Event Bubbling

爲了回答這個問題，我們就需要介紹 JavaScript 中的一個機制—— Event bubbling。 Event bubbling 的意思就是意思是事件在被觸發後，會**從最內層的元素開始，沿著 DOM 樹一層一層向上傳遞**。在這個過程中，所有沿途有監聽器的父元素都會依序收到這個事件，彷彿泡泡從水底慢慢浮到水面。

因此，在上面的例子中，當我們點擊 `button` 時，會先觸發 `child` 上的事件，再冒泡到 `parent`，接著還會冒泡到 `document.body`、`document`，甚至 `window`。

知道了這個機制後，我們就能得出上述代碼的運行結果：

```
Child clicked
Parent clicked
```

## 如何停止冒泡過程

有時候，我們可能不希望事件繼續往上冒泡，例如某些按鈕點擊後只希望執行當前的操作，而不觸發任何父元素的監聽器。這時候可以使用：

```javascript
event.stopPropagation();
```

這段程式碼會阻止事件繼續往上傳播。例如：

```javascript
document.getElementById("child").addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Child clicked");
});
```

這樣即使點擊了 `button`，也只會看到：

```
Child clicked
```

## 實用例子：事件委託（Event Delegation）

事件冒泡不只是個現象，它還帶來一個強大的技巧——**事件委託**。

假設你有很多個列表項目，每個都需要被點擊觸發：

```html
<ul id="list">
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
```

傳統做法是對每個 `li` 都綁定事件，但這樣寫不但低效，動態新增的項目還得額外處理。

利用事件冒泡，你可以只在 `ul` 上綁定一次監聽器，然後根據事件來源（`event.target`）判斷使用者點的是哪個 `li`：

```javascript
document.getElementById("list").addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log(`You have clicked：${event.target.textContent}`);
  }
});
```

這就是所謂的**事件委託（Event Delegation）**。它讓你的程式碼更簡潔、效能更高，且更容易應對動態變化的內容。
