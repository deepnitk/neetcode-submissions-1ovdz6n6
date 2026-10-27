class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const hs = new Set();
        for (let num of nums) {
            hs.add(num);
        }
        let maxi = 0;
        for (const num of nums) {

            //this is the starting point
            if (!hs.has(num - 1)) {
                let currMaxi = 1;
                let currElement = num;
                while (hs.has(currElement + 1)) {
                    currMaxi++;
                    currElement++;
                }
                maxi = Math.max(maxi, currMaxi);
            }
        }
        return maxi;
    }
}
