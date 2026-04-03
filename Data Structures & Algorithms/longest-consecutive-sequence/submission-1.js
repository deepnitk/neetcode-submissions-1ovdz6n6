class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        nums.sort((a, b) => a - b);
        const n = nums.length;
        let currLong = 1;
        let i = 0;
        while(i < n) {
            let curr = 1;
            
            while (i + 1 < n && (nums[i + 1] === nums[i] + 1 || nums[i + 1] === nums[i])) {
                if (nums[i + 1] === nums[i] + 1) {
                    curr++;
                }
                if (curr > currLong) {
                    currLong = curr;
                }
                i = i + 1;

            }
            i = i + 1;
        }
        return currLong;
    }
}
