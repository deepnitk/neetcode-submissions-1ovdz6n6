class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hs = new Set();
        for (let num of nums) {
            if( hs.has(num)) {
                return true;
            }
            hs.add(num);
        }
        return false;
    }
}
