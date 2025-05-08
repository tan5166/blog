---
categories:
- Web Development
- JavaScript
date: "2025-05-07T15:35:00Z"
math: false
tags:
- dom
- javascript
- html
- css
title: Differences Between Element Node, Text Node, and Comment Node
---

When working with the DOM (Document Object Model), we often encounter three common types of nodes:

1. **Element Node**: Corresponds to HTML tags (e.g., `<div>`, `<p>`, etc.)
2. **Text Node**: Represents the text content within an element.
3. **Comment Node**: Represents comments in HTML (e.g., `<!-- comment -->`).

These three types of nodes differ in behavior and properties. Here’s a summary:



## Using `childNodes` vs `children`

- `childNodes`: Returns **all types** of child nodes—including element nodes, text nodes, and comment nodes. The return type is a `NodeList`.
- `children`: Returns **only element nodes** (`Element Node`). The return type is an `HTMLCollection`.

Only **Element Nodes** have the `children` property.
 Text Nodes and Comment Nodes do **not** have this property and can only use `childNodes` (which usually returns an empty list, since they typically have no children).
