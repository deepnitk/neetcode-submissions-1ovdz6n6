class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for (const s of strs) {
            res += s.length;
            res += '#'
            res += s;
        }
        return res;
    }
    

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let ptr = 0;
        while (ptr < str.length) {
            let j = ptr;
            while (str[j] !== '#') {
                j++;
            }
            const n = parseInt(str.substring(ptr, j));
            ptr = j + 1;
            let word = str.slice(ptr, ptr + n);
            res.push(word);
            ptr = ptr + n;
        }
        return res;
    }
}