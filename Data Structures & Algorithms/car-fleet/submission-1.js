class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let pair = position.map((p, i) => [p, speed[i]]);
        pair.sort((a, b) => b[0] - a[0]);
        let stack = [];
        for (let [p, s] of pair) {
            const t = (target - p) / s;
            if (stack.length === 0) {
                stack.push(t);
                continue;
            }
            if (stack.length > 0 && stack[stack.length - 1] < t) {
                stack.push(t);
            }
        }
        return stack.length;
    }
}
