---
categories:
- Web Development
- JavaScript
date: "2025-05-07T13:52:33Z"
math: false
tags:
- dom
- javascript
- html
- css
title: Difference Between Static and Live Collections
---

When working with the DOM, we often retrieve a group of HTML elements for manipulation using JavaScript, such as:

```javascript
document.getElementsByClassName("item");
document.querySelectorAll(".item");
```

These two methods may look similar, but they return **different types of collections**. The key distinction is whether the collection **automatically reflects changes** to the DOM.



## What is a Live Collection?

A **Live Collection** updates automatically when the DOM changes (e.g., when elements are added or removed).

### Common Methods Returning Live Collections:

- `getElementsByClassName()`
- `getElementsByTagName()`
- `element.children`

### Return Type:

- `HTMLCollection` (does not support `.forEach()` directly—you need to convert it to an array)

### Characteristics:

- Stays **synchronized** with the DOM
- Avoids repeated DOM queries, saving performance



## What is a Static Collection?

A **Static Collection** is a snapshot of the DOM at the time of the query. Later changes to the DOM do **not** affect the collection.

### Common Methods Returning Static Collections:

- `querySelectorAll()`
- `element.childNodes`

### Return Type:

- `NodeList` (supports `.forEach()` natively)

### Characteristics:

- One-time result; does **not** auto-update
- More **predictable** and **stable**—ideal for use in loops and logic-based processing



## Example: Demonstrating the Difference

```javascript
const liveList = document.getElementsByTagName("li");     // Live
const staticList = document.querySelectorAll("li");       // Static

console.log(liveList.length);    // 2
console.log(staticList.length); // 2

// Add a new <li>
const newLi = document.createElement("li");
document.querySelector("ul").appendChild(newLi);

console.log(liveList.length);    // ✅ Updated to 3
console.log(staticList.length); // ❌ Still 2
```



## When to Use Live Collections?

| Recommended Scenario                                         | Reason                                         |
| ------------------------------------------------------------ | ---------------------------------------------- |
| Pages where elements are **dynamically added or removed** (e.g., comments, todo lists) | Live collections reflect changes automatically |
| You need to **monitor changes** to a group of elements       | Always up-to-date without additional observers |



## When to Use Static Collections?

| Recommended Scenario                                         | Reason                                                |
| ------------------------------------------------------------ | ----------------------------------------------------- |
| You only need the **current snapshot** of a group of elements | Static collections are stable and efficient           |
| You want to use `.forEach()` directly                        | `NodeList` (Static) supports iteration out of the box |
| You want to avoid unexpected behavior during DOM updates (e.g., deletion in loop) | Static collections don’t change during operations     |

