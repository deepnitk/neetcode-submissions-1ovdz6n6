class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let nse = this.findNSE(heights);
        let pse = this.findPSE(heights);
        let maxi = -Infinity;
        console.log('nse: '+nse);
        console.log('pse: ' +pse);
        for (let i = 0; i < heights.length; i++) {
            maxi = Math.max(maxi, heights[i]*(nse[i] - pse[i] - 1));
        }
        return maxi;
    }

    findNSE(heights) {
        let res = new Array(heights.length);
        const stack = [];
        for (let i = heights.length - 1; i >= 0; i--) {
            while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
                stack.pop();
            }
            if (stack.length === 0) {
                res[i] = heights.length;
            } else {
                res[i] = stack[stack.length - 1];
            }
            stack.push(i);
        }
        return res;
    }

    findPSE(heights) {
        let res = new Array(heights.length);
        const stack = [];
        for (let i = 0; i < heights.length; i++) {
            while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
                stack.pop();
            }
            if (stack.length === 0) {
                res[i] = -1;
            } else {
                res[i] = stack[stack.length - 1];
            }
            stack.push(i);
        }
        return res;
    }
}
