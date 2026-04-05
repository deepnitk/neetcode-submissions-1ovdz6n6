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
    inorderTraversal(root) {
        const res = [];
        const inorderUtils = (node) => {
            if (!node) return;
            inorderUtils(node.left);
            res.push(node.val);
            inorderUtils(node.right);
        }
        inorderUtils(root);
        return res;
    }
}
