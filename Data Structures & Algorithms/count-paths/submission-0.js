class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const dp = Array.from({length: m}, () => Array(n).fill(-1));
        const f = (idx1, idx2) => {
            if (idx1 === m - 1 && idx2 === n - 1) {
                return 1;
            }
            if (idx1 < 0 || idx1 >= m || idx2 < 0 || idx2 >= n) {
                return 0;
            }
            if (dp[idx1][idx2] !== -1) {
                return dp[idx1][idx2];
            }
            let down = f(idx1 + 1, idx2);
            let right = f(idx1, idx2 + 1);
            return dp[idx1][idx2] = down + right;
        }

        return f(0, 0);
    }
}
