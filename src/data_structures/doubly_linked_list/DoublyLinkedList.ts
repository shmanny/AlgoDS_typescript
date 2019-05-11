export class Node {
  public val: any;
  public next: Node;
  public previous: Node;

  constructor(val: any) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  public head: Node;
  public tail: Node;
  public length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  public push(val: any): DoublyLinkedList {
    const newTail = new Node(val);
    if (!this.length) {
      this.head = newTail;
      this.tail = newTail;
    } else {
      const currentTail = this.tail;
      this.tail = newTail;
      newTail.previous = currentTail;
      currentTail.next = newTail;
    }
    this.length++;
    return this;
  }

  public pop(): DoublyLinkedList {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const newTail = this.tail.previous;
      this.tail = newTail;
      this.tail.next = null;
    }
    this.length--;
    return this;
  }

  public shift(): DoublyLinkedList {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const newHead = this.head.next;
      this.head.next = null;
      newHead.previous = null;
      this.head = newHead;
    }
    this.length--;
    return this;
  }

  public unshift(val: any): DoublyLinkedList {
    const newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      const oldHead = this.head;
      newHead.next = oldHead;
      oldHead.previous = newHead;
      this.head = newHead;
    }
    this.length++;
    return this;
  }

  public get(index: number): Node {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;
    let current;
    if (index < Math.floor(this.length / 2)) {
      let i = 0;
      current = this.head;
      while (i !== index) {
        current = current.next;
        i++;
      }
    } else {
      let i = this.length - 1;
      current = this.tail;
      while (i !== index) {
        current = current.prev;
        i--;
      }
    }
    return current;
  }

  public set(index: number, value: any): boolean {
    const node = this.get(index);
    if (node) {
      node.val = value;
      return true;
    }
    return false;
  }

  public insert(index: number, val: any): DoublyLinkedList | null {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);
    const newNode = new Node(val);
    const prev = this.get(index - 1);
    const next = prev.next;
    prev.next = newNode;
    newNode.next = next;
    newNode.previous = prev;
    this.length++;
    return this;
  }

  public remove(index: number) {
    const foundNode = this.get(index);
    
  }

  public print() {
    if (!this.length) {
      console.log('The list is empty, yo');
      return;
    } else {
      const nodes = [];
      let current = this.head;
      for (let i = 0; i < this.length; i++) {
        nodes.push(current.val);
        current = current.next;
      }
      console.log(nodes.join(' <-> '));
    }
  }
}

/* 
  Used to generate a random linked list of length 4 for testing
*/
const list = new DoublyLinkedList();
const random = () => Math.floor(Math.random() * 100);
list.push(random());
list.push(random());
list.push(random());
list.push(random());
list.print();
list.insert(1, 23);
list.print();
