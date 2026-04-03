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
     * @return {TreeNode}
     */
    invertTree(root) {
        if (root === null) {
            return null;
        }
        // Swap the childern
        const temp = root.left;
        root.left = root.right;
        root.right = temp;

        // 3. Recursively invert the subtrees
        this.invertTree(root.left);
        this.invertTree(root.right);

        // 4. Return the root of the inverted tree
        return root;
    }
}
