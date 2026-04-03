class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    //TC:O(N^2) SC:O(N^2)+O(N)
    lengthOfLIS(nums) {
        let n = nums.length;
        const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
        for(let idx = n - 1; idx >= 0; idx--) {
            for (let prev = idx - 1; prev >= -1;prev--) {
                let notPick = 0 + dp[idx+1][prev + 1];
                let pick = 0;
                if (prev === -1 || nums[prev] < nums[idx]) {
                    pick = 1 + dp[idx + 1][idx + 1];
                }
                dp[idx][prev + 1] = Math.max(pick, notPick);
            }
        }
        return dp[0][-1 + 1];
    }
    
}
