class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};
        for (let s of strs) {
            const sortedS = s.split('').sort().join('');
            if (!res[sortedS]) {
                res[sortedS] = []
            }
            res[sortedS].push(s);
        }
        return Object.values(res);
    }

    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }
        const sHM = new Map();
        const tHM = new Map();
        for(let i = 0; i < s.length;i++) {
            sHM.set(s[i], (sHM.get(s[i]) || 0) + 1);
            tHM.set(t[i], (tHM.get(t[i]) || 0) + 1);
        }

        for (const [key, value] of sHM) {
            if(sHM.get(key) !== tHM.get(key)) {
                return false;
            }
        }
        return true;
    }
}
