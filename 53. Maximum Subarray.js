/**
 * @param {number[]} nums
 * @return {number}
 */

// nums = [-2,1,-3,4,-1,2,1,-5,4]

function maxSubArray(nums) {
    if (nums.length === 1) return nums[0];
    
    let maxValue = nums[0];
    let accNums = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
        let calc = Math.max(nums[i], accNums + nums[i]);
        if (calc > maxValue) maxValue = calc;
        accNums = calc;
    }
    
    return maxValue;
};
