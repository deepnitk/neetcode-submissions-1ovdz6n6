class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        const n = words.length;
        let adj = {};
        const indegree = {};
        for (let word of words) {
            for (let char of word) {
                if (!adj[char]) adj[char] = [];
                if (!indegree[char]) indegree[char] = 0;
            }
        }

        for (let i = 0;i < (n - 1);i++) {
            const s1 = words[i]; 
            const s2 = words[i + 1];
            const len = Math.min(s1.length, s2.length);
            //invalid prefix
            if (s1.length > s2.length && s1.startsWith(s2)) {
                return "";
            }
            for (let j = 0; j < len; j++) {
                if (s1[j] === s2[j]) {
                    continue;
                } else {
                    if (!adj[s1[j]].includes(s2[j])) {
                        indegree[s2[j]]++;
                        adj[s1[j]].push(s2[j]);
                       
                    }
                    break;
                }
            }
        }
        console.log(indegree);
        console.log(adj);

        const q = new Queue();

        for (const key in indegree) {
            if (indegree[key] === 0) {
                q.push(key);
            }
        }

        const res = [];

        while (!q.isEmpty()) {
            const node = q.pop();  // remove from front
            res.push(node);
            for (const nei of adj[node]) {
                indegree[nei]--;
                if (indegree[nei] === 0) {
                    q.push(nei);
                }
            }
        }
        if (res.length !== Object.keys(indegree).length) {
            return "";
        }
        return res.join('');
    }
}
