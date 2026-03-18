x = float(input())
p = float(input())
y = float(input())

day = 0
while(x<=y):
    x+=(x*p/100)
    day+=1
    
print(day)