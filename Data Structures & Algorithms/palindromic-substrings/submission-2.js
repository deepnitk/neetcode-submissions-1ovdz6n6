class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    // TC:O(N^2) | SC:O(1)
    countSubstrings(s) {
        let res = 0;
        let n = s.length;
        for(let i = 0; i < n;i++) {
            res += this.countPali(s, i, i);
            res += this.countPali(s, i, i + 1);
        }
        return res;
    }

    countPali(s, l, r) {
        let res = 0;
        while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
            res++;
            l--;
            r++;
        }
        return res;
    }
}
