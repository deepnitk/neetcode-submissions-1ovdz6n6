class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = [];
        const n = nums.length;
        let mul = 1;
        let mulWithZero = 1;
        let zeroCount = 0;
        for (let i = 0; i < n;i++) {
                mul *= nums[i];
                if (nums[i] !== 0) mulWithZero *= nums[i];
                else zeroCount++;
        }
        for (let i = 0; i < n; i++) {
            if (nums[i] !== 0) res[i] = mul/nums[i];
            else res[i] = zeroCount > 1 ? 0 : mulWithZero;
        }
        return res;
    }
}