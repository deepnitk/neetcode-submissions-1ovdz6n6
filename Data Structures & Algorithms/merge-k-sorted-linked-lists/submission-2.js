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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (lists.length === 0) {
            return null;
        }
        let head = lists[0];
        for (let i = 1; i < lists.length; i++) {
            head = this.mergeTwoLists(head, lists[i]);
        }
        return head;
    }
    mergeTwoLists(list1, list2) {
        const dummy = new ListNode();
        let node = dummy;

        while (list1 && list2) {
            if (list1.val < list2.val) {
                node.next = list1;
                list1 = list1.next;
            }
            else {
                node.next = list2;
                list2 = list2.next;
            }
            node = node.next
        }
        if (list1) {
            node.next = list1;
        } else {
            node.next = list2;
        }
        return dummy.next;
    }
}
