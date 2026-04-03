class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxLen = 0;
        for (let i = 0; i < s.length; i++) {
            let hm = new Map();
            let maxf = 0;
            for (let j = i; j < s.length; j++) {
                hm.set(s[j], (hm.get(s[j]) || 0) + 1);
                maxf = Math.max(maxf, hm.get(s[j]));
                if ((j -i + 1) - maxf <= k) {
                    maxLen = Math.max(maxLen, j -i +1);
                }
            }
        }
        return maxLen;
    }
}
