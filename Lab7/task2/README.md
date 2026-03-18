# Lab 7 — Task 2: OOP in Python

## Overview
This project demonstrates Object-Oriented Programming concepts using an Animal class hierarchy.

## Structure
- `models.py` — defines `Animal` (base class), `Dog`, and `Cat` (child classes)
- `main.py` — demonstrates usage: instantiation, polymorphism, iteration

## Class Hierarchy

```
Animal
├── Dog
└── Cat
```

## Concepts Demonstrated
- **Encapsulation** — attributes and methods bundled in classes
- **Inheritance** — `Dog` and `Cat` extend `Animal` via `super()`
- **Polymorphism** — `speak()` returns different sounds per class
- **Method Overriding** — `describe()` and `speak()` overridden in child classes
- **`__str__`** — string representation for each class

## How to Run
```bash
cd task2
python main.py
```

## Example Output
```
=== All Animals ===
Animal(name=Generic, age=3, color=gray)
Dog(name=Buddy, breed=Labrador, age=5)
...
=== Polymorphism: speak() ===
Generic says: ...
Buddy says: Woof!
Rex says: Woof!
Whiskers says: Meow!
Shadow says: Meow!
```

## Code Style
Follows [PEP 8](https://peps.python.org/pep-0008/) style guide.
