def first_last6(nums):
  idx = -1
  for i in range(0,len(nums)):
    if(nums[i]==6):
      idx = i
  return idx==0 or idx==len(nums)-1
