class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        nums.sort((a, b) => a - b);
        let currentStreak = 1,
            longest = 1;
        for (let i = 1; i < nums.length; i++) {
            // Skip duplicate numbers
            if (nums[i] === nums[i - 1]) continue;

            // Check if current number continues the consecutive streak
            if (nums[i] === nums[i - 1] + 1) {
            currentStreak++;
            } else {
            // Streak broken: reset current streak tracker
            longest = Math.max(longest, currentStreak);
            currentStreak = 1;
            }
        }

        return Math.max(longest, currentStreak);
    }
}
