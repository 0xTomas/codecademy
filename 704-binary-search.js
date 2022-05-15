const array1 = [1, 5, 7, 10, 15]

const search = function(nums, target) {
    var [low, mid, high] = [0, 0, nums.length - 1]

    while (low <= high) {
        mid = low + Math.floor((high - low)/2)
        nums[mid] <= target ? low = mid + 1 : high = mid - 1
    }
    return nums[high] === target ? high: -1
}

console.log(search(array1, 1))
