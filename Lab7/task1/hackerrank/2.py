s = input()
n = len(s)

vowels = "AEIOU"

kevin = 0
stuart = 0

for i in range(n):
    if s[i] in vowels:
        kevin += n - i
    else:
        stuart += n - i

if kevin > stuart:
    print(f"Kevin {kevin}")
elif stuart > kevin:
    print(f"Stuart {stuart}")
else:
    print("Draw")