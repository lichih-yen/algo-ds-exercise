const nums = [1, 2, 3, 6, 7, 9];
const target = 9;
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

// optimized way is below:
function twoSum(nums, target) {
    let memory = {};
    for (let i = 0; i < nums.length; i++) {
       if (memory[nums[i]] == undefined) {
           memory[target - nums[i]] = i;
       } else {
            return console.log(memory[nums[i]], i)
       }
    }
}

twoSum(nums, target);
