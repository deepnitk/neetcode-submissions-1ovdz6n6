class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;
        const dp = new Array(nums.length).fill(0);
        //Base case
        dp[0] = nums[0];
        let neg = 0;

        //Memoization
        for(let i = 1; i < n; i++) {
            //pick not pick
            let pick = nums[i];
            if (i > 1) pick += dp[i - 2];
            const notPick = 0 + dp[i - 1];

            dp[i] = Math.max(pick, notPick);
        }
        return dp[n - 1];
    }
}
