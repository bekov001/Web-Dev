def main(a,d):
    return (a or d)

a,d = list(map(int,input().split()))

print(main(a,d))