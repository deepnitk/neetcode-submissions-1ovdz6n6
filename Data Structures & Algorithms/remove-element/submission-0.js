class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        const temp = [];
        for (const num of nums) {
            if (num !== val) {
                temp.push(num);
            }
        }
        for (let i = 0; i < temp.length; i++) {
            nums[i] = temp[i];
        }
        return temp.length;
    }
}
