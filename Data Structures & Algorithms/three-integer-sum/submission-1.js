class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = new Set();
    
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1;j < nums.length; j++) {
                for (let k = j + 1;k < nums.length;k++) {
                    if (nums[i] + nums[j]+ nums[k] === 0) {
                        const triplets = JSON.stringify([nums[i], nums[j], nums[k]].sort());
                        res.add(triplets)
                    }
                }
            }
        }
        return Array.from(res).map((item) => JSON.parse(item));
    }
}
