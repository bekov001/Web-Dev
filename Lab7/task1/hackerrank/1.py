m,n = list(map(int,input().split()))

a = list(map(int,input().split()))
b = list(map(int,input().split()))

c = list(map(int,input().split()))

happy = 0

for i in c:
    if(i in a):
        happy+=1
    elif(i in b):
        happy-=1
print(happy)