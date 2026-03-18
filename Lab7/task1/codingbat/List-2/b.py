def sum13(nums):
    total = 0
    skip_next = False  

    for num in nums:
        if num == 13:
            skip_next = True  
            continue
        if skip_next:
            skip_next = False
            continue
        total += num

    return total