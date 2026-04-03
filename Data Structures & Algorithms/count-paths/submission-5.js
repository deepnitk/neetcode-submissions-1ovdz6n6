class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
     uniquePaths(m, n) {
        let prev = Array(n).fill(1);
        
        for (let i = 1; i < m; i++) {
            let curr = Array(n).fill(1);
            for (let j = 1; j < n; j++) {
               curr[j] = prev[j] + curr[j - 1];
            }
            prev = curr;
        }
        return prev[n - 1];
    }
}
