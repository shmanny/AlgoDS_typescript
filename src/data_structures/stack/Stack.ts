export class Node {
  public value: any;
  public next: Node;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  public first: Node;
  public last: Node;
  public size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  public push(val: any): Node {
    const newNode = new Node(val);
    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      newNode.next = temp;
      this.first = newNode;
    }
    this.size++;
    return newNode;
  }

  pop() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }

  public print() {
    let current = this.first;
    for (let i = 0; i < this.size; i++) {
      console.log(`${current.value}`);
      current = current.next;
    }
  }
}

const stack = new Stack();
const random = () => Math.floor(Math.random() * 100);
stack.push(random());
stack.push(random());
stack.push(random());
stack.push(random());

stack.print();
