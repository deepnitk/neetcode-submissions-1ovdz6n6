class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxi = 0;
        let l = 0, r = heights.length - 1;
        while (l < r) {
            const curr = Math.min(heights[r], heights[l])*(r - l);
            if (curr > maxi) {
                maxi = curr;
            }
            heights[l] > heights[r] ? r-- : l++;
        }
        return maxi;
    }
}
