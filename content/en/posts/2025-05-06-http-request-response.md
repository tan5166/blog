---
categories:
- Data
- Web Scraping
date: "2025-05-06T16:02:10Z"
math: false
tags:
- data
- requests
- web scraping
title: Web Scraping Part 1 — HTTP Requests and Responses
---

When we enter a URL in a browser, the browser sends an HTTP request to the server.
 There are different types of HTTP methods, but the most common ones are `GET` and `POST`.

- `GET` is used to **retrieve** data. For example, when we visit a webpage, the browser sends a GET request to fetch content such as text, images, and styles. GET requests include parameters in the **URL**, so they’re not suitable for sending sensitive information.
- `POST` is used to **send** or **create** data. For example, when submitting a login form, comment, or registration, the browser sends a POST request, transmitting the data (e.g., username, password) in the **body** of the request, not directly in the URL.



### HTTP Request Example

Here’s what a complete HTTP request might look like:

```
GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)
Accept: text/html,application/xhtml+xml
Accept-Language: zh-TW
Connection: keep-alive
```

- `GET /index.html HTTP/1.1`: Requests the resource `index.html` using HTTP/1.1.
- `Host`: Specifies which website the client wants to reach (important when multiple sites are hosted on the same server).
- `User-Agent`: Identifies the client’s browser and operating system.
- `Accept`, `Accept-Language`: Indicate what formats and languages the client prefers.
- `Connection`: Indicates whether the connection should be kept alive.



## HTTP Response Example

When a server receives a request, it sends back an HTTP response:

```
HTTP/1.1 200 OK
Date: Tue, 06 May 2025 09:00:00 GMT
Server: Apache/2.4.41 (Ubuntu)
Content-Type: text/html; charset=UTF-8
Content-Length: 3056

<!DOCTYPE html>
<html>
  <head>
    <title>Welcome</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    ...
  </body>
</html>
```

**Explanation:**

- `HTTP/1.1 200 OK`: Means the request was successful (200 is the status code).
- `Date`, `Server`: Provide the response timestamp and server information.
- `Content-Type`: Informs the browser that the content is HTML.
- `Content-Length`: The length of the response body in bytes.
- The content below is the actual HTML page returned by the server.



### HTTP Status Codes

The status code (e.g., `200`) in the response has specific meanings:

| Code Class | Name          | Description                                        |
| ---------- | ------------- | -------------------------------------------------- |
| 1xx        | Informational | Request received, continuing processing            |
| 2xx        | Success       | Request was received and processed successfully    |
| 3xx        | Redirection   | Further action is needed (e.g., redirect)          |
| 4xx        | Client Error  | Request has an error (e.g., bad syntax, not found) |
| 5xx        | Server Error  | Server failed to fulfill a valid request           |

In summary:

- `2xx` is what you want to see—everything went well.
- `3xx` means the client needs to follow a redirect.
- `4xx` usually indicates user-side problems (e.g., typo, not logged in).
- `5xx` signals server-side problems.
