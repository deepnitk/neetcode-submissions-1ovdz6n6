class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = new Map();
        let res = 0;
        let maxi = 0;
        for (let num of nums) {
            count.set(num, (count.get(num) || 0) + 1);
            if (count.get(num) > maxi) {
                res = num;
                maxi = count.get(num);
            }
        }
        return res;

    }
}
