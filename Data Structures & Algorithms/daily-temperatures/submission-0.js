class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = new Array(temperatures.length).fill(0);
        const st = [];
        for (let i = 0; i < temperatures.length;i++) {
            const t = temperatures[i];
            while (st.length > 0 && st[st.length - 1][0] < t) {
                const [stTemp, stIdx] = st.pop();
                res[stIdx] = i - stIdx;
            }
            st.push([t, i]);
        }
        return res;
    }
}
