---
categories:
- Data
- Web Scraping
date: "2025-05-06T16:09:28Z"
math: false
tags:
- data
- requests
- web scraping
title: Web Scraping Part 2 — Python requests
---

`requests` is a very commonly used HTTP library in Python.
 It provides a clean and simple way to send `GET` or `POST` requests and is one of the core tools used for web scraping.



## Installing `requests`

To install it, run this in the command prompt (CMD):

```bash
pip install requests
```

------

## Sending a GET Request

You can send a GET request to a website using:

```python
import requests

url = "http://www.example.com"  # Make sure to include http:// or https://

response = requests.get(url)
```



## Check Response Status Code

Use `response.status_code` to check whether the request succeeded:

```python
if response.ok:
    print("Request succeeded!")
    print(response.text)
else:
    print(f"Request failed, status code: {response.status_code}")
```



## Adding Headers

### Why Add Headers?

In real web scraping tasks, some websites check the **identity** of the request to determine whether it's coming from a real browser.
 If you send a request without proper headers, the site might reject it or return an error page.

Browsers automatically add headers like `User-Agent`, which tells the server, for example: "This request was sent from Chrome/Firefox".
 But `requests.get()` doesn’t include these by default, so the website might suspect it's a bot and block the request.

To make your request look more like a real browser visit, you should include headers.

### Example: Add User-Agent

```python
import requests

url = "http://www.example.com"

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36"
}

response = requests.get(url, headers=headers)

if response.ok:
    print("Request succeeded!")
    print(response.text)
else:
    print(f"Request failed, status code: {response.status_code}")
```



### Other Common Headers (add based on needs)

```python
headers = {
    "User-Agent": "Mozilla/5.0",
    "Accept-Language": "zh-TW,zh;q=0.9",
    "Referer": "https://www.google.com"
}
```

These help simulate a “real user clicking through” and increase your chance of successfully retrieving data.
