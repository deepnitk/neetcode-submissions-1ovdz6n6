class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        let n1 = text1.length;
        let n2 = text2.length;
        const dp = Array.from({ length: n1 + 1 }, () => Array(n2 + 1).fill(-1));
        return this.f(text1, text2, n1 - 1, n2 - 1, dp);
    }
    f(text1, text2, idx1, idx2, dp) {
        if (idx1 < 0 || idx2 < 0) {
            return 0;
        }
        if (dp[idx1][idx2] !== -1) {
            return dp[idx1][idx2];
        }
        if (text1[idx1] === text2[idx2]) {
            return 1 + this.f(text1, text2, idx1 - 1, idx2 - 1, dp);
        }
        return dp[idx1][idx2] = Math.max(0 + this.f(text1, text2, idx1 - 1, idx2, dp),
            0 + this.f(text1, text2, idx1, idx2 - 1, dp));
    }
}
