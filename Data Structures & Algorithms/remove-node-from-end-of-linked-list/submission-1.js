/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        if (n === 0) {
            return head;
        }
        let len = 0;
        let temp = head;
        while(temp) {
            len++;
            temp = temp.next
        }
        if (n === len) {
            return head.next;
        }
        let nFromBeg = len - n;
        let ptr = head;
        while(nFromBeg !== 1 && ptr != null) {
            nFromBeg--;
            ptr = ptr.next;
        }
        let ptr2 = ptr.next.next;
        ptr.next = ptr2;

        return head;
    }
}
