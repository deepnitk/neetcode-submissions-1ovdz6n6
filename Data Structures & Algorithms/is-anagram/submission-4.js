class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }
        const hm1 = new Map();
        const hm2 = new Map();
        for (let i = 0; i < s.length;i++) {
            const ch1 = s[i];
            const ch2 = t[i];
            if (hm1.has(ch1)) {
                hm1.set(ch1, hm1.get(ch1) + 1);
            } else {
                hm1.set(ch1, 0);
            }
            if (hm2.has(ch2)) {
                hm2.set(ch2, hm2.get(ch2) + 1);
            } else {
                hm2.set(ch2, 0);
            }
        }
        for (const [key, value] of hm1) {
            if(hm1.get(key) !== hm2.get(key)) {
                return false;
            }
        }
        return true;
        
    }
}
