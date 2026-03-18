n  = int(input())
b = list(map(int,input().split()))

count = 0
for i in range(1,n):
    if(b[i]>b[i-1]>0):
        count+=1
        
print(count)