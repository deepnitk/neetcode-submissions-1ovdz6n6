class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let n = nums.length;
        for(let i = 0;i < n;i++) {
            for(let j = 0; j < n; j++) {
                if (nums[i] === nums[j] && i !== j) {
                    return true;
                }
            }
        }
        return false;
    }
}
