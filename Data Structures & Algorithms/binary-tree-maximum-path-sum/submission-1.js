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
    maxPathSum(root) {
        let maxi = -Infinity;

        function maxPathSumUtils(root) {
            if (!root) return 0;
            let leftSum = Math.max(0, maxPathSumUtils(root.left));
            let rightSum = Math.max(0, maxPathSumUtils(root.right));
            maxi = Math.max(maxi, leftSum + rightSum + root.val);
            return Math.max(leftSum, rightSum) + root.val;

        }
        maxPathSumUtils(root);
        return maxi;
    }
    
}
