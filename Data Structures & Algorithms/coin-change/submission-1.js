class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let n = coins.length;
        const dp = Array.from({ length: n }, () =>
            Array(amount + 1).fill(-1)
        );
        const f = (idx, remaining) => {
            if (remaining === 0) return 0;
            if (idx < 0 || remaining  < 0) {
                return Infinity;
            }
            if(dp[idx][remaining] !== -1) {
                return dp[idx][remaining];
            }
            // pick
            const pick = 1 + f(idx, remaining - coins[idx]);

            // not pick
            const notPick = f(idx - 1, remaining);

            return dp[idx][remaining] = Math.min(pick, notPick);

        }
        const ans = f(n - 1, amount);
        return ans === Infinity ? -1 : ans;
    }
}
