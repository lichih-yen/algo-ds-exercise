const nums = [1, 2, 3, 6, 7, 9];
const target = 9;

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return console.log(i + ", " + j);
            }
        }
    }
    
}

twoSum(nums, target);
