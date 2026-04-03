class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // We expand the window by moving the right pointer.
        // If we ever see a repeated character, 
        // we shrink the window from the left until the duplicate is removed.
        const hs = new Set();
        let l = 0;
        let res = 0;
        
        for(let r = 0; r < s.length;r++) {
            while (hs.has(s[r])) {
                hs.delete(s[l]);
                l++;
            }
            hs.add(s[r]);
            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}
