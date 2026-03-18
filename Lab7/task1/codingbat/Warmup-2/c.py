def array_front9(nums):
  for i in range(0, min(4,len(nums))):
    if(nums[i]==9):
      return True
  return False