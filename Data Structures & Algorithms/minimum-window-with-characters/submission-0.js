class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === '') return '';

        let countT = {};
        for (let c of t) {
            countT[c] = (countT[c] || 0) + 1;
        }

        let result = "";
        let minLen = Infinity;

        for (let i = 0; i < s.length; i++) {
            let countS = {};
            for(let j = i; j < s.length; j++) {
                const ch = s[j];
                countS[ch] = (countS[ch] || 0) + 1;

                if (this.containsAll(countS, countT)) {
                    if ((j - i + 1) < minLen) {
                        minLen = j - i + 1;
                        result = s.slice(i, j + 1);
                    }
                    break;
                }
            }
        }
        return result;
    }
    containsAll(hm1, hm2) {
        for (let char in hm2) {
            if ((hm1[char] || 0) < hm2[char]) {
                return false;
            }
        }
        return true;
    }
}
