class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        let n1 = text1.length;
        let n2 = text2.length;
        const dp = Array.from({ length: n1 + 1 }, () => Array(n2 + 1).fill(0));
        for (let idx1 = 1;idx1 <= n1;idx1++) {
            for (let idx2 = 1;idx2 <= n2;idx2++) {
                if (text1[idx1 - 1] === text2[idx2 - 1]) {
                    dp[idx1][idx2] =  1 + dp[idx1 - 1][idx2 - 1];
                } else {
                    dp[idx1][idx2] = Math.max((0 + dp[idx1 - 1][idx2])
                ,(0 + dp[idx1][idx2 - 1]));
                    }
                }
                
        }
        return dp[n1][n2];
    }
}
