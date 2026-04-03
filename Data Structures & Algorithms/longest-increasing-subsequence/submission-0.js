class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        let n = nums.length;
        const dp = Array.from({ length: n }, () => Array(n + 1).fill(-1));
        return this.lengthOfLISUtils(nums, 0, -1, dp);
    }

    lengthOfLISUtils(nums, idx, prev, dp) {
        if (idx >= nums.length) {
            return 0;
        }
        if (dp[idx][prev + 1] !== -1) {
            return dp[idx][prev + 1];
        }
        let notPick = 0 + this.lengthOfLISUtils(nums, idx + 1, prev, dp);
        let pick = 0;
        if (prev === -1 || nums[prev] < nums[idx]) {
            pick = 1 + this.lengthOfLISUtils(nums, idx + 1, idx, dp);
        }
        return dp[idx][prev + 1] = Math.max(pick, notPick);
    }
    
}
