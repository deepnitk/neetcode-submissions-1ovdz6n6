class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxi = 0;
        let l = 0, r = heights.length - 1;
        while (l < r) {
            let currMax = 0;
            currMax = Math.min(heights[l], heights[r]) * (r - l);
            if (currMax > maxi) {
                maxi = currMax;
            }
            heights[l] > heights[r] ? r-- : l++;
        }
        return maxi;
    }
}
