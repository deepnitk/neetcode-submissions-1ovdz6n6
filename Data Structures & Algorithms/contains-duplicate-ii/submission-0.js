class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const window = new Set();
        let l = 0;
        for (let r = 0; r < nums.length; r++) {
            // window size > k
            if (r - l > k) {
                window.delete(nums[l]);
                l++;
            }
            // element found in window
            if (window.has(nums[r])) {
                return true;
            }
            // window size < k && not found in current window
            window.add(nums[r]);
        }
        return false;
    }
}
