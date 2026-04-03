class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let ans = [];
        let cur = [];
        this.backTrack(nums, target, ans, cur, 0);
        return ans;
    }

    backTrack(nums, target, ans, cur, idx) {
        if (target === 0) {
            ans.push([...cur]);
        } else if (target < 0 || idx >= nums.length) {
            return;
        } else {
            //Pick...
            cur.push(nums[idx]);
            this.backTrack(nums, target - nums[idx], ans, cur, idx);
            cur.pop();
            this.backTrack(nums, target, ans, cur, idx + 1);
        }
    }
}
