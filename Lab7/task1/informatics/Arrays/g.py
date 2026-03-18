n = int(input())
b = list(map(int,input().split()))

a = False
for i in range(n-1, -1, -1):
    print(b[i], end = " ")