import math

A = int(input())
B = int(input())
N = int(input())

if N > max(A, B) or N % math.gcd(A, B) != 0:
    print("Impossible")
else:
    a = 0
    b = 0

    while a != N and b != N:
        if a == 0:
            a = A
            print(">A")

        elif b == B:
            b = 0
            print("B>")

        else:
            move = min(a, B - b)
            a -= move
            b += move
            print("A>B")