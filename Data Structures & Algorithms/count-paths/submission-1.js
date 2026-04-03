class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    //TC:O(N^2) SC: O(N^2) + O(N^2)
    uniquePaths(m, n) {
        const dp = Array.from({length: m}, () => Array(n).fill(0));
        //Base case
        dp[m - 1][n - 1] = 1;
        for (let idx1 = m - 1; idx1 >= 0;idx1--) {
            for (let idx2 = n - 1; idx2 >= 0;idx2--) {
                //do stuff
                // let down = dp[idx1 + 1][idx2];
                // let right = dp[idx1][idx2 + 1];
                // dp[idx1][idx2] = down + right;
                if (idx1 === m - 1 && idx2 === n - 1) continue;

                let down = (idx1 + 1 < m) ? dp[idx1 + 1][idx2] : 0;
                let right = (idx2 + 1 < n) ? dp[idx1][idx2 + 1] : 0;

                dp[idx1][idx2] = down + right;
            }
        }
            
        return dp[0][0];
    }
}
