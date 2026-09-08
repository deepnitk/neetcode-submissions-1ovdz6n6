class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        numbers.sort((a, b) => a - b);
        let l = 0;
        let r = numbers.length - 1;
        while (l <= r) {
            const total = numbers[l] + numbers[r];
            if ( total === target) {
                return [l + 1, r + 1];
            } else if (total < target) {
                l++;
            } else {
                r--;
            }
        }
        return [];
    }
}
