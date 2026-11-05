class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxi = nums[0];
        let curr = 0;
        for (const num of nums) {
            if (curr < 0) {
                curr = 0;
            }
            curr += num;
            maxi = Math.max(maxi, curr);
        }
        return maxi;
    }
}
