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
}
