class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxi = 0;
        let l = 0, r = 1;
        while (r < prices.length) {
            if (prices[l] < prices[r]) {
                let profit = prices[r] - prices[l];
                maxi = Math.max(maxi, profit);
            } else {
                l = r;
            }
            r++;
        }
        return maxi;
    }
}
