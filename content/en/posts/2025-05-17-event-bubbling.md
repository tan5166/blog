---
title: What Happens When You Click a Button? Exploring Event Bubbling in JavaScript
date: 2025-05-17 22:41:00 +0800
categories: [Web Development, JavaScript]
tags: [dom, javascript, html] # TAG names should always be lowercase
math: false
---

In a complex web page, we often attach different event listeners to nested elements. Take the following HTML as an example:

```html
<div id="parent">
  <button id="child">Click me</button>
</div>
```

Now, suppose we attach `click` event listeners to both the `div` and the `button`:

```javascript
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});
```

So, which event listener will be triggered first when we click the button?

## Event Bubbling

To answer that, we need to introduce a mechanism in JavaScript called **Event Bubbling**.
Event bubbling means that **when an event is triggered on a nested element, it starts from the innermost target and then propagates upward through the DOM tree**. Along the way, all ancestor elements with listeners for the same event will be triggered, one by one—just like a bubble rising from the bottom of the water.

In the example above, when we click the `button`, the event is first handled by the `child` element, then it bubbles up to the `parent`, and continues up to `document.body`, `document`, and even `window`.

Given this mechanism, the output of the code above will be:

```
Child clicked
Parent clicked
```

## How to Stop the Bubbling Process

Sometimes, we might not want the event to bubble up—perhaps we only want the current element to handle the event, without triggering any listeners on parent elements. In such cases, you can use:

```javascript
event.stopPropagation();
```

This line stops the event from continuing to propagate upward. For example:

```javascript
document.getElementById("child").addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Child clicked");
});
```

Now, even if we click the `button`, the output will be:

```
Child clicked
```

## Practical Example: Event Delegation

Event bubbling is not just a behavior—it also enables a powerful technique called **event delegation**.

Imagine you have a list where each item needs to respond to clicks:

```html
<ul id="list">
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
```

A traditional approach would be to bind an event listener to each `li` element. But this is inefficient, and you’ll need extra logic to handle dynamically added items.

Thanks to event bubbling, you can attach just **one** event listener to the `ul` element and determine which `li` was clicked by inspecting `event.target`:

```javascript
document.getElementById("list").addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log(`You have clicked: ${event.target.textContent}`);
  }
});
```

This is called **event delegation**. It makes your code cleaner, more efficient, and easier to maintain—especially when dealing with dynamic content.
