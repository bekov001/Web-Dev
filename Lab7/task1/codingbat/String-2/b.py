def count_code(str):
  idx = 0
  for i in range(0, len(str)-3):
    if(str[i]=='c' and str[i+1]=='o' and str[i+3]=='e'):
      idx+=1
  return idx
