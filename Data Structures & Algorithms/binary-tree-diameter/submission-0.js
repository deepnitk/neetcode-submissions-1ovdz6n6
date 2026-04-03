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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        if (root == null) {
            return 0;
        }
        
        let leftHeight = this.maxDepth(root.left);
        let rightHeight = this.maxDepth(root.right);
        let diameter = leftHeight + rightHeight;

        let sub = Math.max(
            this.diameterOfBinaryTree(root.left),
            this.diameterOfBinaryTree(root.right),
        );
        
        return Math.max(diameter, sub);
    }

    maxDepth(root) {
        if (root == null) {
            return 0;
        }
        return 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right));
    }
}
