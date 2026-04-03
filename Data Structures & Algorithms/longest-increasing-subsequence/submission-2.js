class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    //TC:O(N^2) SC:O(N^2)
    lengthOfLIS(nums) {
        let n = nums.length;
        const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
        let curr = Array.from({ length: n + 1 }).fill(0);
        let next = Array.from({ length: n + 1 }).fill(0);
        let len = 0;
        for(let idx = n - 1; idx >= 0; idx--) {
            for (let prev = idx - 1; prev >= -1;prev--) {
                let notPick = 0 + next[prev + 1];
                let pick = 0;
                if (prev === -1 || nums[prev] < nums[idx]) {
                    pick = 1 + next[idx + 1];
                }
                len = Math.max(pick, notPick);
                curr[prev + 1] = len
            }
            next = curr;
        }
        return next[-1 + 1];
    }
    
}
