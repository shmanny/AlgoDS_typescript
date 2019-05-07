export class Node {
  public val: any;
  public next: Node;

  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  public length: number;
  public head: Node;
  public tail: Node;

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  public push(val: any): SinglyLinkedList {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  public pop(): Node {
    if (!this.length) return;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  public shift(): Node {
    if (!this.length) return;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length -= 1;
    if (this.length) {
      this.tail = null;
    }
    return currentHead;
  }

  public unshift(val: any): SinglyLinkedList {
    const newHead = new Node(val);
    if (!this.length) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      const currentHead = this.head;
      this.head = newHead;
      newHead.next = currentHead;
    }
    this.length += 1;
    return this;
  }

  public get(index: number): Node {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.head;
    let value: Node = this.head;
    for (let i = 1; i < index; i++) value = value.next;
    return value;
  }

  public set(index: number, value: any): boolean {
    let node: Node = this.get(index);
    if (!node) return false;
    else {
      node.val = value;
      return true;
    }
  }

  public insert(index: number, val: any): boolean {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    const newNode = new Node(val);
    const before = this.get(index - 1);
    const after = before.next;
    before.next = newNode;
    newNode.next = after;
    this.length++;
    return true;
  }

  /* 
    First, we check if the index passed in is less than zero or greater than the length
    of the list. In both scenarios, the index is invalid and we theerefore return undefined.
    If the index passed in is zero, we can simply use the unshift method to remove the head.
    We first create three reference pointers: one for the node before the passed in index, on for
    the node at the index itself, and one for the node after the index. We set the next property
    of "before" to be the node stored in "after" removing any references to the node at the index
    passed in.
  */
  public remove(index: number): boolean {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) return !!this.pop();
    if (index === 0) return !!this.shift();
    const before: Node = this.get(index - 1);
    const temp: Node = before.next;
    const after: Node = temp.next;
    before.next = after;
    this.length -= 1;
    return temp.val;
  }

  /* Initialize three pointers: current, next, and prev. Set current to the head and set both prev and next to be null. 
  Starting at the begging of the list, store the next node after current in the variable "next". Set the next property of
  "current" to be the empty node "prev". Set the value of "prev" to be the value of current. Set the value of current to be 
  the value of next. After the first iteration, you should have prev as the original head, and both previous and next as the
  node immediately after the head. Repeat this process until you reach the end of the list.   */

  public reverse() {
    let current = this.head;
    this.tail = current;
    let prev;
    let next;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    this.tail.next = null;
    return this;
  }

  public print() {
    const nodes = [];
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      nodes.push(current.val);
      current = current.next;
    }
    console.log(nodes.join(' -> '));
  }
}

/* 
  Used to generate a random linked list of length 4 for testing
*/
const list = new SinglyLinkedList();
const random = () => Math.floor(Math.random() * 100);
list.push(random());
list.push(random());
list.push(random());
list.push(random());
list.print();
