/*
https://leetcode.com/problems/add-two-numbers/
Difficulty: Medium
question and example are below the code
*/

//  Definition for singly-linked list.
  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }
 

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let sum : number;                   // to sum values
    let addOn : boolean;                // check if the sum is over 10
    let retListNode : ListNode;         // to return
    let curListNode : ListNode;         // current ListNode
    while (l1 || l2) {          // do while l1 or l2 exists
        sum = 0;
        if(l1) {                // if l1 exists, add val to sum, and change l1 to the next ListNode
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2) {                // if l2 exists, add val to sum, and change l2 to the next ListNode
            sum += l2.val;
            l2 = l2.next;
        }
        addOn? sum++ : sum;     // if former sum is over 10, add 1 to sum
        if(sum >= 10) {         // decide addOn
            sum -= 10;
            addOn = true;
        } else addOn = false;
        if(!curListNode) {      // the first loop
            curListNode = new ListNode(sum, null);
            if(l1 || l2) curListNode.next = new ListNode();
            else if(addOn) curListNode.next = new ListNode(1, null);
            retListNode = curListNode;
        } else {                
            curListNode.val = sum;                                      //assign sum to the current ListNode
            if(l1 || l2) curListNode.next = new ListNode();             //if there is next, put new ListNode to the current ListNode
            else if(addOn) curListNode.next = new ListNode(1, null);    //if there is no next, but former sum is over 10
        }
        curListNode = curListNode.next;     //change current ListNode
    };
    return retListNode;
};

/*
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.

Example :
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
*/