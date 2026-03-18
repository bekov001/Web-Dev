n = int(input())

a = [1,1]
k = 1

while(a[k]!=n):
    a.append(a[k]+a[k-1])
    k+=1
print(k+1)