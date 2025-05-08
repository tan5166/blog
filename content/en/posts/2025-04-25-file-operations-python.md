---
categories:
- Python
- Python Basics
date: "2025-04-25T03:05:00Z"
math: false
tags: []
title: File Operations in Python
---


## File Operations

When writing programs, we often need to interact with files—for example, writing content to a file or reading content from a file. Python provides several functions to work with files.

## Opening a File

Files can be opened for either reading or writing. In Python, this is done as follows:

```python
# Use "r" for reading, "w" for writing
open("file_path", "r", encoding="utf-8")
```

### Reading a File

After opening a file, reading is straightforward:

```python
f = open("file_path", "r", encoding="utf-8")
print(f.read())  # Read all content and print
print(f.read())  # Prints an empty string
```

The `read()` method keeps track of the current position in the file, so the second read will return an empty string.
 If the file is too large, avoid reading the entire file at once, as it can lead to memory issues. In such cases, use `read(number)` to read a specific number of bytes.

Additionally, you can use `readline()` to read one line at a time, and `readlines()` to read the entire file into a list where each element is a line.

### Writing to a File

Writing is also simple. Use `f.write(content)` to write content into the file. However, note that opening a file with `"w"` will clear its existing content.

```python
f = open("file_path", "w", encoding="utf-8")
f.write("Hello world!")
f.close()
# The file now contains: Hello world!

f = open("file_path", "w", encoding="utf-8")
f.write("HI")
f.close()
# The file now contains only: HI
```

If you want to append to a file instead of overwriting it, use `"a"` mode:

```python
f = open("file_path", "a", encoding="utf-8")
```

If the file does not exist, both `"w"` and `"a"` modes will create it, but `"r"` mode will throw an error.

### The `r+` Mode

If you want to both read and write, use `"r+"` mode. It allows **reading and writing** without clearing the file, but **writing starts at the beginning of the file**, potentially overwriting existing content.

- If you write fewer characters than the original content, the remaining original content stays.
- If you write more, it only overwrites part of the file—it does not automatically delete the excess original content.

To write at a specific position after reading, use:

```python
f = open("file_path", "r+", encoding="utf-8")
f.seek(5)  # Move the cursor to the 5th byte
f.write("HAHA")
f.close()
```

To write at the end, simply read first, then write.

### Summary

| Mode | Meaning        | Clears file? | Writes from start?   |
| ---- | -------------- | ------------ | -------------------- |
| `r+` | Read and write | ❌ No         | ✅ Yes                |
| `w`  | Write only     | ✅ Yes        | ✅ Yes                |
| `a`  | Append         | ❌ No         | ❌ No (writes at end) |

## Closing a File

After working with a file, always close it to prevent **resource leaks or file corruption**. Use `f.close()`. A safer way is using the `with` statement:

```python
with open("test.txt", "w") as f:
    f.write("Hello, world!")
# f is automatically closed after this block
```
