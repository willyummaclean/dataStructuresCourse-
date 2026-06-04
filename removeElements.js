
/*
Problem: Remove Element

Given an array nums and a value val, remove all occurrences of val in-place and return the new length of the array.
The order of elements can change. Do not use extra space for another array.

Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- How would this change if we needed to preserve order?
*/
//[0,1,1,1,1,00]
function removeElement(nums, val) {
  // your code here
  for(let i = 0; i < nums.length; i++){
    let j = nums.length -1
    if(nums[i] === val){
      while(nums[j] === val){
        nums.pop()
        j--
      }
      nums[i] = nums[j]
      nums.pop()
      j--
      
    }
  }
  return nums.length

}

// let answer = removeElement([0,1,0,0,1,0], 0)
// console.log(answer)