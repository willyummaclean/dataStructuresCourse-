/*
Problem: Reverse Linked List

Given the head of a singly linked list, reverse the list and return the new head.
You must reverse the list in-place using only constant extra space.

Example:
Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
Output: 5 -> 4 -> 3 -> 2 -> 1 -> null

Node structure:
class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
*/

// class ListNode {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// const ListNode1 = new ListNode(1);
// const ListNode2 = new ListNode(2);
// const ListNode3 = new ListNode(3);
// const ListNode4 = new ListNode(4);

// // Connect the ListNodes together
// ListNode1.next = ListNode2;
// ListNode2.next = ListNode3;
// ListNode3.next = ListNode4;

function reverseList(head) {
  // Approach: Use three pointers to reverse the links
  // prev: points to the previous node (initially null)
  // current: points to the current node being processed
  // next: temporarily stores the next node to avoid losing it
  
  // Your code here
  if (head === null) {
    return null
  }
  if (head.next === null){
    return head
  }
  let current = head
  let next = null
  let prev = null

  while (current !== null){
    next = current.next
    current.next = prev
    prev = current 
    current = next
  }
  
  return prev
  
}

// let answer =  reverseList(ListNode1)

// console.log(answer)