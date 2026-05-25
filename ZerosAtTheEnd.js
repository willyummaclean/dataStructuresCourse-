function moveZeroes(nums) {
  // Move all zeros to the end while maintaining relative order
  // Requirements:
  // - Maintain the relative order of non-zero elements
  //
  // Example:
  // Input: [0, 1, 0, 3, 12]
  // Output: [1, 3, 12, 0, 0]
  
  // Your code here
  let newArray = []
  let zeroArray = []
  for (let i = 0; i < nums.length; i++){
    if(nums[i] == 0){
      zeroArray.push(0)
    }
    else {
      newArray.push(nums[i])
    }
  }
  for (let j = 0; j < zeroArray.length; j++){
    newArray.push(0)
  }

  return(newArray)
  
}