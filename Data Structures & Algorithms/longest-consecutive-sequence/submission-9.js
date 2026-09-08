class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) {
            return 0;
        }

        nums.sort((a, b) => a - b);

        let maxi = 1;
        let currMaxi = 1;

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === nums[i - 1]) {
                continue;
            }
            if (nums[i] === nums[i - 1] + 1) {
                currMaxi++;
            } else {
                currMaxi = 1;
            }
            maxi = Math.max(maxi, currMaxi);
        }
        return maxi;
    }
}
