// LeetCode challenge: #1

const nums = [10, 2, 1, 5, 2, 9]
const target = 6

const twoSum = function(nums, target) {
    // Declare an empty object of visited numbers to avoid two loops.
    const visitedNums = {}
    for (let n=0; n<nums.length; n++) {
        // The next number we need is the difference between the target and the current number
        let next = target - nums[n]
        // Check if this number has been seen.
        if (next in visitedNums) return [visitedNums[next], n]
        // Add a key:value pair in the format of number:index of number
        visitedNums[nums[n]] = n;
    }
    return null
}

console.log(twoSum(nums, target))
