class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let res = 0;
        let hs = new Set();
        let l = 0;
        for (let r = 0;r < s.length;r++) {
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
