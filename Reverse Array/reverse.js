// ITERATIVE
function reverse(nums) {
    for (let i = 0; i < Math.floor(nums.length / 2); i++) {
        [nums[i], nums[nums.length - 1 - i]] = [nums[nums.length - 1 - i], nums[i]];
    }
    return nums;
}

// RECURSIVE
function reverse(i, nums) {
    if (i >= Math.floor(nums.length / 2)) return nums;
    [nums[i], nums[nums.length - 1 - i]] = [nums[nums.length - 1 - i], nums[i]];
    return reverse(i + 1, nums);
}

console.log(reverse(0, [1, 2, 3, 4, 5]));
