---
categories:
- Data
- Web Scraping
date: "2025-05-06T17:38:37Z"
math: false
tags:
- data
- requests
- web scraping
title: Web Scraping Part 3 — Parsing HTML with Beautiful Soup
---


While `requests` can retrieve the raw HTML content of a webpage, what we get is just one big HTML string. We need a tool to **parse** the tags and extract the information we want—like article titles, table contents, image URLs, etc. That’s where **Beautiful Soup** comes in.



## Installing BeautifulSoup

```bash
pip install beautifulsoup4
```



## How to Use

Here’s a simple example using `requests` to fetch a webpage and print its `<title>`:

```python
import requests
from bs4 import BeautifulSoup

url = "https://example.com"
res = requests.get(url)
soup = BeautifulSoup(res.text, "html.parser") 

print(soup.title.text)
```



## Common Features

### Find Tags

```python
soup.find("h1")  # Finds the first <h1>
soup.find_all("p", attrs={"class": "price_color"})  # Finds all <p> tags with class "price_color"
```



### Select by Class or ID

```python
soup.find("div", class_="news") 
soup.find(id="main")
```



### Extract Content and Attributes

```python
img = soup.find("img")
print(img["src"])       # Get image URL
print(img.get("alt"))   # Get image alt text
```

Once you've located the desired tag, use `.string` to extract the text content without the tag itself.



## Full Example: Extracting All Prices from a Website

```python
import requests
from bs4 import BeautifulSoup

url = "https://books.toscrape.com/"

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36"
}

response = requests.get(url, headers=headers)
print(response)

if response.ok:
    print("Success!")
    content = response.text
else:
    print("Fail")

soup = BeautifulSoup(content, "html.parser")

all_prices = soup.find_all("p", class_="price_color")

for price in all_prices:
    print(price.string[2:])  # Strip off currency symbol
```

This script scrapes all price values from the page and prints them without the currency symbol.
