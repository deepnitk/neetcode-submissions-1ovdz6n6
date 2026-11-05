class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDuplicates(nums) {
        const answer = [];
        for (let i = 0; i < nums.length; i++) {
            const value = Math.abs(nums[i]);
            if (nums[value - 1] < 0) answer.push(value);
            else nums[value - 1] = -nums[value - 1];
        }
        return answer;
    }
}
