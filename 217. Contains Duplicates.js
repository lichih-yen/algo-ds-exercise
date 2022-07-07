

const array = [1, 2, 3, 7, 5, 7]

function containsDuplicate(nums) {
 
    nums.sort((a,b) => (a-b));
  
    for (let i = 0; i < nums.length; i++) {
        if ( i > 0 && nums[i-1] === nums[i]) {
            return console.log('true');
        }
    }
    return console.log('false');
}

containsDuplicate(array);
