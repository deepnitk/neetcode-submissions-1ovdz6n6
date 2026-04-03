class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxLen = 0;
        let hm = new Map();
        let maxf = 0;
        let l = 0;
        for (let r = 0; r < s.length; r++) {
            hm.set(s[r], (hm.get(s[r]) || 0) + 1);
            maxf = Math.max(maxf, hm.get(s[r]));
            while ( r - l + 1 - maxf > k) {
                hm.set(s[l], hm.get(s[l]) - 1);
                l++;
            }
            maxLen = Math.max(maxLen, r - l + 1);
        }
        return maxLen;
    }
}
