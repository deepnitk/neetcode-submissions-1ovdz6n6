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
     * @return {number[]}
     */
    preorderTraversal(root) {
        const res = [];
        const preorderUtils = (node) => {
            if (!node) return;
            res.push(node.val);
            preorderUtils(node.left);
            preorderUtils(node.right);
        }
        preorderUtils(root);
        return res;
    }
}
