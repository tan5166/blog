---
categories:
- Python
- Python Basics
date: "2025-04-25T02:28:00Z"
math: false
tags:
- oop
title: Class and Class Inheritance Syntax in Python
---

## Class in Python

A **class** is the cornerstone of Object-Oriented Programming (OOP). The concept of "object-oriented" means abstracting real-world entities into **objects** in code, and a class serves as the blueprint to define these objects. This might sound abstract—here’s an example: a dog is a class with attributes like `name` and `age`, while a specific dog like Xiao Hei is an object that has its own name and age. Below is the syntax for defining classes in Python:

```python
# 1. Define a class
class Dog:
    def __init__(self, name, age):
        self.name = name  # attribute
        self.age = age

    def bark(self):  # method
        print(f"{self.name}: Woof!")

# 2. Create an object
my_dog = Dog("Xiao Hei", 3)

# 3. Use the object
print(my_dog.name)  # access attribute
my_dog.bark()       # call method
```

## Class inheritance in Python

To better follow the DRY (Don't Repeat Yourself) principle and reduce repetitive code, classes can use **inheritance**. Inheritance means that a "child class" can inherit the **attributes** and **methods** from a "parent class". For example, both "cat" and "dog" are types of "animals". They both eat, but make different sounds. So we can first write an `Animal` class that contains the `eat` method, and then let both `Cat` and `Dog` inherit from it. The syntax in Python is as follows:

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def eat(self):
        print(f"{self.name} is eating")

    def speak(self):
        print(f"{self.name} made a sound")

class Dog(Animal):
    def __init__(self, name, breed):
        # Call the parent's __init__ method to set name
        super().__init__(name)
        self.breed = breed
        print(f"Dog: Breed is {self.breed}")

    def speak(self):
        super().speak()  # Optional: call parent's speak
        print(f"{self.name}: Woof!")


class Cat(Animal):
    def __init__(self, name, color):
        super().__init__(name)
        self.color = color
        print(f"Cat: Color is {self.color}")

    def speak(self):
        print(f"{self.name}: Meow~")
        
# Example usage
dog = Dog("Xiao Hei", "Labrador")
cat = Cat("Xiao Hua", "White")

dog.eat()
dog.speak()

cat.eat()
cat.speak()
```

> `super` helps us call methods from the parent class.
