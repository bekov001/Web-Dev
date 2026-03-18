n  = int(input())
b = list(map(int,input().split()))

a = False

for i in range(1,n):
    if((b[i]>0 and b[i-1]>0) or (b[i]<0 and b[i-1]<0)):
        a = True
        break
        
        
print(a)