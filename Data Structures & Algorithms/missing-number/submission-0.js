class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let xor = 0;

        // XOR all array elements
        for (let i = 0; i < nums.length; i++) {
            xor ^= nums[i];
        }

        // XOR all numbers from 0 to n
        for (let i = 0; i <= nums.length; i++) {
            xor ^= i;
        }

        return xor;
    }
}
