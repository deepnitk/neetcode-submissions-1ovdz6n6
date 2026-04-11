class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let res = [];
        let p1 = 0, p2 = 0;
        let len1 = word1.length, len2 = word2.length;
        let i = 0;
        while (p1 < len1 || p2 < len2) {
            if (p1 < len1) res.push(word1[p1++]);
            if (p2 < len2) res.push(word2[p2++]);
        }
        return res.join('');
    }
}
