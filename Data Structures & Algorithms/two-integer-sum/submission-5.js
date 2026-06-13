class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // nums = [3,4,5,6], target = 7
    twoSum(nums, target) {
        const hm = new Map();
        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (hm.has(diff)) {
                return [hm.get(diff), i];
            }
            hm.set(nums[i], i);
        }
        return [];
    }
}
