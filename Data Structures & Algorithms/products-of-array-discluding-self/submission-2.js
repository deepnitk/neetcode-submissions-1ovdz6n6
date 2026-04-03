class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = [];
        const n = nums.length;
        const prefixMul = new Array(n);
        const suffixMul = new Array(n);

        prefixMul[0] = 1;
        suffixMul[n - 1] = 1;
        for (let i = 1; i < n;i++) {
            prefixMul[i] = prefixMul[i - 1] * nums[i - 1];
        }
        for (let i = n - 2; i >= 0; i--) {
            suffixMul[i] = suffixMul[i + 1] * nums[i + 1];
        }
        for (let i = 0;i < n; i++) {
            res[i] = prefixMul[i] * suffixMul[i];
        }
        return res;
    }
}