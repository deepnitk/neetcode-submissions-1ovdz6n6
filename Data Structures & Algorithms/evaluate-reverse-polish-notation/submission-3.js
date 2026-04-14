class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const st = [];
        for (const c of tokens) {
            if (c === '+') {
                st.push(st.pop() + st.pop());
            } else if (c === '-') {
                const a = st.pop();
                const b = st.pop();
                st.push(b - a);
            } else if (c === '*') {
                st.push(st.pop() * st.pop());
            } else if (c === '/') {
                const a = st.pop();
                const b = st.pop();
                st.push(Math.trunc(b / a));
            } else {
                st.push(parseInt(c));
            }
        }
        return st.pop();
    }
}
