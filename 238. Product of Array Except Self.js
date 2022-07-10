/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
IOC =>
Input: nums
Output: all the element except for itself
Condition: O(n), without division
*/

// nums = [1, 2, 3, 4]
// leftProduct = [1, 1, 2, 6]
// rightProduct = [24, 12, 4, 1]
// result = left * right => [24, 12, 8, 6]

function productExceptSelf(nums) {
    let leftProduct = [];
    let rightProduct = [];
    let result = [];
    
    // populate leftProduct
    for (let i = 0; i < nums.length; i ++) {
        if (leftProduct.length === 0){
          leftProduct.push(1);  
        } else {
            leftProduct.push(leftProduct[i - 1] * nums[i - 1]);
        }    
    }
    
    // populate rightProduct
    for (let i = nums.length - 1; i > -1; i --) {
        if (rightProduct.length === 0) {
            rightProduct.push(1);
        } else {
            rightProduct.unshift(rightProduct[0] * nums[i + 1])
        }
    }
    
    // populate result
    for (let i = 0; i < leftProduct.length; i++) {
        result.push(leftProduct[i] * rightProduct[i]);
    }
        
    return result;
};
