/**
 * @param {number[]} nums
 * @return {number}
 */

/*
I: nums = [1,1,2]
O: 2, nums = [1,2,_]
C:  (1). Return k after placing the final result in the first k slots of nums.
    (2). with O(1) extra memory.
*/
const removeDuplicates = (nums) => {
    let indexCounter = 0;
    for(let i in nums) {
        if (nums[i] !== nums[i-1]){
            nums[indexCounter] = nums[i];
            indexCounter++;    
        }
    }
    return indexCounter;
};

