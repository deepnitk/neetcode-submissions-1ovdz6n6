class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let low = 0;
        let high = nums.length - 1;
        while (low <= high) {
            let mid = Math.floor((low + high)/2);
            if (nums[mid] === target) {
                return mid;
            }
           
            if (nums[low] <= nums[mid]) {
                //Left sorted
                if (nums[low] <= target && nums[mid] >= target) {
                     // target lies in left of left half
                    high = mid - 1;
                } else {
                    // target lies in left of left half
                    low = mid + 1;
                }
            } else {
                //right sorted
                if (nums[mid] <= target && nums[high] >= target) {
                     // target lies in left of right half
                     low = mid + 1;
                } else {
                    // target lies in left of left half
                    high = mid - 1;
                }
            }
        }
        return -1;
    }
}
