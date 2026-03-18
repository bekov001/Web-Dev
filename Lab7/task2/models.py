"""
Models module — defines Animal base class and its subclasses Dog and Cat.
Follows PEP 8 style guide.
"""


class Animal:
    """Base class representing a generic animal."""

    def __init__(self, name, age, color):
        self.name = name
        self.age = age
        self.color = color

    def speak(self):
        """Return the sound the animal makes."""
        return "..."

    def describe(self):
        """Return a description of the animal."""
        return f"{self.name} is a {self.color} animal, {self.age} years old."

    def __str__(self):
        return f"Animal(name={self.name}, age={self.age}, color={self.color})"


class Dog(Animal):
    """Dog subclass — inherits from Animal."""

    def __init__(self, name, age, color, breed):
        super().__init__(name, age, color)
        self.breed = breed

    def speak(self):
        return "Woof!"

    def fetch(self, item):
        return f"{self.name} fetched the {item}!"

    def describe(self):
        base = super().describe()
        return f"{base} Breed: {self.breed}."

    def __str__(self):
        return f"Dog(name={self.name}, breed={self.breed}, age={self.age})"


class Cat(Animal):
    """Cat subclass — inherits from Animal."""

    def __init__(self, name, age, color, indoor):
        super().__init__(name, age, color)
        self.indoor = indoor

    def speak(self):
        return "Meow!"

    def purr(self):
        return f"{self.name} is purring... Purrr~"

    def describe(self):
        base = super().describe()
        lifestyle = "indoor" if self.indoor else "outdoor"
        return f"{base} Lifestyle: {lifestyle}."

    def __str__(self):
        return f"Cat(name={self.name}, indoor={self.indoor}, age={self.age})"
