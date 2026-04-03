class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let res = 0;
        let hm = new Map()
        let l = 0;
        for (let r = 0;r < s.length;r++) {
            if (hm.has(s[r])) {
                l = Math.max(hm.get(s[r]) + 1, l);
            }
            hm.set(s[r], r);
            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}
