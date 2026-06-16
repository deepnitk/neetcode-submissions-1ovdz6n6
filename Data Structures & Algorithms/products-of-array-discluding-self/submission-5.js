class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const prefix = new Array(n);
        prefix[0] = nums[0];
        const postfix = new Array(n);
        postfix[n -1] = nums[n - 1];
        
        for (let i = 1; i < n; i++) {
            prefix[i] = prefix[i - 1] * nums[i];
        }
        for (let i = n - 2; i >= 0; i--) {
            postfix[i] = postfix[i + 1] * nums[i];
        }
        const res = new Array(n);
        for (let i = 0; i < n; i++) {
            if (i === 0) {
                res[0] = postfix[1];
                continue;
            }
            if (i === n - 1) {
                res[n - 1] = prefix[ n - 2];
                continue;
            }
            res[i] = prefix[i - 1] * postfix[ i + 1];
        }

        console.log(prefix);
        console.log(postfix);
        console.log(res);

        return res;
    }
}
