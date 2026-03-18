n = int(input())

while(n>=0):
    if(n==1):
        print("YES")
        break
    if(n%2!=0):
        print("NO")
        break
    n/=2
