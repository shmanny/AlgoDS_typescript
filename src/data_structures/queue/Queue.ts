export class Node {
  public value: any;
  public next: Node;

  constructor(val: any) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  public first: Node;
  public last: Node;
  public size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  public push(val: any) {
    const newNode = new Node(val);
    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.last;
      temp.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return newNode;
  }

  public pop() {
    if (!this.size) return undefined;
    const temp = this.first;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }
    return temp;
  }
}
