function removeDuplicates(nums) {
  // Remove duplicates from sorted array in-place
  // Requirements:
  // - Array is sorted in ascending order
  // - Remove duplicates in-place (modify original array)
  // - Return new length after removing duplicates
  // - First k elements should contain unique elements
  // - Use O(1) extra space complexity
  // - Use two-pointer technique
  //
  // Example:
  // Input: nums = [1, 1, 2, 2, 3]
  // Output: 3 (array becomes [1, 2, 3, _, _], return 3)
  
  // Your code here
  if (nums.length === 0) return 0;
  
  let left = 0 
  let right = 1
  
  while (right < nums.length) {
    if (nums[left] === nums[right]){
      right++
    }
    else {
      left++
      nums[left] = nums[right]
      right++
    }
  }

  return nums.length = (left + 1)
  
}

console.log(removeDuplicates([1, 1, 2, 2, 3]))