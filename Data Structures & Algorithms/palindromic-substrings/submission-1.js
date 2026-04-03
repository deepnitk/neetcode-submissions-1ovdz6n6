class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let res = 0;
        let n = s.length;
        for(let i = 0; i < n;i++) {
            //for odd
            let l = i;
            let r = i;
            while (l >=0 && r < n && s[l] === s[r]) {
                res++;
                l--;
                r++;
            }

            //for evn
            l = i;
            r = i+1;
            while (l >=0 && r < n && s[l] === s[r]) {
                res++;
                l--;
                r++;
            }
        }
        return res;
    }
}
