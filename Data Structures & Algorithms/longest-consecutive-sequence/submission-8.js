class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let maxi = 0;

        for (const num of numSet) {
            // starting
            if(!numSet.has(num - 1)) {
                let current = num;
                let currMaxi =  1;
                while (numSet.has(current + 1)) {
                    current++;
                    currMaxi++;
                }
                maxi = Math.max(maxi, currMaxi);
            }
        }
        return maxi;
    }
}
