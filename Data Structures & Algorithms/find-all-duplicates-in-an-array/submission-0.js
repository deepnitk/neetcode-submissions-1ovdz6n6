class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDuplicates(nums) {
        const count =  new Map();
        const res = new Set();
        for (const num of nums) {
            count.set(num, (count.get(num) || 0) + 1);
        }

        for (const num of nums) {
            if (count.get(num) === 2) {
                res.add(num)
            }
        }
        return [...res];
    }
}
