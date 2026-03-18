a = float(input())
b = float(input())

day = 1

while(a<b):
    a+=a*0.1
    day+=1

print(day)