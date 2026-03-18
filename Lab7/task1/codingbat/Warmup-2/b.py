def string_splosion(str):
  str1 = ""
  for i in range(0,len(str)+1):
    for j in range(0, i):
      str1 += str[j]
  return str1