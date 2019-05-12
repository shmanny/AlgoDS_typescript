export class Node {
  public value: any;
  public priority: number;

  constructor(val: any, priority: number) {
    this.value = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  public queue: Array<Node>;
  constructor() {
    this.queue = [];
  }

  public enqueue(val: any, priority: number) {
    const newNode = new Node(val, priority);
    this.queue.push(newNode);
    this.bubbleUp();
  }

  public dequeue() {
    const highestPriority = this.queue[0];
    const lastNode = this.queue.pop();
    this.queue[0] = lastNode;
    this.sinkDown();
    return highestPriority;
  }

  private bubbleUp() {
    let idx = this.queue.length - 1;
    let parentIdx = () => Math.floor((idx - 1) / 2);
    while (this.queue[parentIdx()] && this.queue[idx].priority < this.queue[parentIdx()].priority) {
      const temp = this.queue[parentIdx()];
      this.queue[parentIdx()] = this.queue[idx];
      this.queue[idx] = temp;
      idx = parentIdx();
    }
  }

  private sinkDown() {
    let idx = 0;
    const length = this.queue.length;
    const element = this.queue[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.queue[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.queue[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.queue[idx] = this.queue[swap];
      this.queue[swap] = element;
      idx = swap;
    }
  }
}

const priorityQueue = new PriorityQueue();
const randomValues = [
  '',
  'Concussion',
  'Headache',
  'Cold',
  'Drunk',
  'Cut',
  'Cough',
  'Rash',
  'Stubbed Toe',
  'Broken Nail',
  'Diarreah'
];
const randomPriority = () => Math.floor(Math.random() * 10);
priorityQueue.enqueue(randomValues[randomPriority()], 4);
priorityQueue.enqueue(randomValues[randomPriority()], 7);
priorityQueue.enqueue(randomValues[randomPriority()], 2);
priorityQueue.enqueue(randomValues[randomPriority()], 9);
priorityQueue.enqueue(randomValues[randomPriority()], 1);
console.log(priorityQueue.queue);
priorityQueue.dequeue();
console.log('***************');
console.log(priorityQueue.queue);
