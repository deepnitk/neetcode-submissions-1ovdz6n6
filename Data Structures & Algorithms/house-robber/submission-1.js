class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;
        const dp = new Array(nums.length).fill(-1);
        const robUtils = (idx) => {

            if (idx === 0) return nums[idx];
            if (idx < 0) return 0;
            if (dp[idx] !== -1) return dp[idx];
            const pick = nums[idx] + robUtils(idx - 2);
            const notPick = 0 + robUtils(idx - 1);
            return dp[idx] = Math.max(pick, notPick);
        }

        return robUtils(n - 1);
    }
}
