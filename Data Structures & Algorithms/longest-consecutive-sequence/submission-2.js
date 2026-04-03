class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        let n = nums.length;
        const hs = new Set();
        for(const num of nums) {
            hs.add(num);
        }
        let maxi = 0;
        for(const num of nums) {
            let curr = 0;
            let currNum = num;
            // start of a sequence
            if (!hs.has(currNum - 1)) {
                curr++;
                while(hs.has(currNum + 1)) {
                    currNum = currNum + 1;
                    curr++;
                }
                if (curr > maxi) {
                    maxi = curr
                }
            } else {
                continue;
            }
        }
        return maxi;
    }
}
