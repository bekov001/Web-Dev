n = int(input())
b = list(map(int,input().split()))

a = False
for i in range(1, n-1):
    if(b[i]>b[i-1] and b[i]>b[i+1]):
        a = True
        break

print(a)