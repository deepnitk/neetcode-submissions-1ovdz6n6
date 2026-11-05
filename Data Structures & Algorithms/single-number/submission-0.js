class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let ans;
        for (const num of nums) {
            ans ^= num;
        }
        return ans;
    }
}
