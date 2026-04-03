class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const result = [];
    const windowIndices = []; // This acts as our "Deque"

    for (let i = 0; i < nums.length; i++) {
        // 1. Remove indices that are now outside the window range
        if (windowIndices.length > 0 && windowIndices[0] <= i - k) {
            windowIndices.shift(); // Remove from the front
        }

        // 2. Remove indices of numbers smaller than the current number
        // (Because they'll never be the maximum if a larger number exists)
        while (windowIndices.length > 0 && nums[windowIndices[windowIndices.length - 1]] < nums[i]) {
            windowIndices.pop(); // Remove from the back
        }

        // 3. Add the current index to the list
        windowIndices.push(i);

        // 4. Once the window is at least size k, start adding the max to our result
        if (i >= k - 1) {
            result.push(nums[windowIndices[0]]);
        }
    }

    return result;
    }
}
