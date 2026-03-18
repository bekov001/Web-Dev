"""
Main script — demonstrates OOP concepts using the Animal hierarchy.
Instantiates objects, stores them in a list, demonstrates polymorphism.
"""

from models import Animal, Dog, Cat


def print_separator():
    print("-" * 40)


def main():
    # Create objects from each class
    generic_animal = Animal("Generic", 3, "gray")
    dog1 = Dog("Buddy", 5, "golden", "Labrador")
    dog2 = Dog("Rex", 3, "black", "German Shepherd")
    cat1 = Cat("Whiskers", 4, "white", indoor=True)
    cat2 = Cat("Shadow", 2, "black", indoor=False)

    # Store objects in a list
    animals = [generic_animal, dog1, dog2, cat1, cat2]

    print("=== All Animals ===")
    for animal in animals:
        print(animal)

    print_separator()

    # Demonstrate polymorphism — calling overridden speak() method
    print("=== Polymorphism: speak() ===")
    for animal in animals:
        print(f"{animal.name} says: {animal.speak()}")

    print_separator()

    # Demonstrate describe() method
    print("=== Descriptions ===")
    for animal in animals:
        print(animal.describe())

    print_separator()

    # Call Dog-specific methods
    print("=== Dog-specific methods ===")
    print(dog1.fetch("ball"))
    print(dog2.fetch("stick"))

    print_separator()

    # Call Cat-specific methods
    print("=== Cat-specific methods ===")
    print(cat1.purr())
    print(cat2.purr())

    print_separator()

    # Filter by type using isinstance
    print("=== Only Dogs ===")
    dogs = [a for a in animals if isinstance(a, Dog)]
    for dog in dogs:
        print(dog)

    print("=== Only Cats ===")
    cats = [a for a in animals if isinstance(a, Cat)]
    for cat in cats:
        print(cat)


if __name__ == "__main__":
    main()
