class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        nums.sort((a, b) => b - a);
        console.log(nums);
        return nums[k - 1];
    }
}
