// const nums = [1, 2, 3, 6, 7, 9];
// const target = 9;

// This is way one:
// function twoSum(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return console.log(i + ", " + j);
//             }
//         }
//     }
    
// }
// ----------------------------------------------

// optimized way:
function twoSum(nums, target) {
    const previousValue = {};
    for (let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i];
        const needValue = target - currentNumber;
        const index2 = previousValue[needValue];
        if(index2 != null) {
            return [index2, i]
        } else {
            previousValue[currentNumber] = i;
        }
        
    }

