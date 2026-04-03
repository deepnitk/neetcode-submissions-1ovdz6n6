class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length === 1) return nums[0];
        return Math.max(
                this.helper(nums.slice(1)),
                this.helper(nums.slice(0, -1)),
            );
    }
    helper(nums) {
        const n = nums.length;
        const dp = new Array(nums.length).fill(0);
        //Base case
        let prev = nums[0] ;
        let prev2 = 0;

        //Memoization
        for(let i = 1; i < n; i++) {
            //pick not pick
            let pick = nums[i];
            if (i > 1) pick += prev2;
            const notPick = 0 + prev;
            const curr = Math.max(pick, notPick);
            prev2 = prev;
            prev = curr
        }
        return prev;
    }
}
