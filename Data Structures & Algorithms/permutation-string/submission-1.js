class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        //pattern
        const hms1 = new Map();
        for(let i = 0;i < s1.length;i++) {
            hms1.set(s1[i], (hms1.get(s1[i]) || 0) + 1);
        }
        const need = hms1.size;
        let n = s1.length;

        for(let l = 0;l <= s2.length - n;l++) {
            const hms2 = new Map();
            for(let i = l;i < l + n;i++) {
                hms2.set(s2[i], (hms2.get(s2[i]) || 0) + 1);
            }
            let count = 0;
            for(const [key, value] of hms1) {
                if (!(hms2.has(key) && hms2.get(key) === value)) {
                    break;
                }
                if ((hms2.has(key) && hms2.get(key) === value)) {
                    console.log('key' +key);
                    console.log('value' +value);
                    count++;
                }
                
            }  
            if (count === need) {
                return true;
            }
        }
        return false;
    }
}
