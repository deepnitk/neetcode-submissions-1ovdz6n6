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
    postorderTraversal(root) {
         const res = [];
        const postorderUtils = (node) => {
            if (!node) return;
            postorderUtils(node.left);
            postorderUtils(node.right);
            res.push(node.val);
        }
        postorderUtils(root);
        return res;
    }
}
