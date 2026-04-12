/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        let res = [0];
        this.dfs(root, res);
        return res[0] <= 0;
    }

    dfs(node, res) {
        if (node === null) {
            return 0;
        }
        const left = this.dfs(node.left, res);
        const right = this.dfs(node.right, res);
        if (Math.abs(left - right) > 1) {
            res[0] = res[0] + 1;
            console.log(res[0]);
        }
        return 1 + Math.max(left, right);
    }
}
