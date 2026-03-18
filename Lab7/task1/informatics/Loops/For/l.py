bits = input()

sumn = 0
for i in range(0, len(bits)):
    sumn += int(bits[i])*(2**i)
print(sumn)
    