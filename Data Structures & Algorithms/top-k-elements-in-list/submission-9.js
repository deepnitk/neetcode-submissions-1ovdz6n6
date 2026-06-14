class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map();
        for (const num of nums) {
            freq.set(num, (freq.get(num) || 0) + 1);
        }
        const sorted = [...freq.entries()].sort((a, b) => b[1] - a[1]);
        return sorted.slice(0, k).map(([num]) => num);
        }
}
