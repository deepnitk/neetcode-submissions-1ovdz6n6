class Solution {
    public int maxProfit(int[] prices) {
        int l = 0, r = 1;
        int maxi = 0;

        while (r < prices.length) {
            if (prices[l] < prices[r]) {
                int profit = prices[r] - prices[l];
                maxi = Math.max(maxi, profit);
            } else {
                l = r;
            }
            r++;
        }
        return maxi;
    }
}
