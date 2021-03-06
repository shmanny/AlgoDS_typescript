class MaxBinaryHeap {
  public values: Array<any>;

  constructor() {
    this.values = [];
  }

  public insert(val: any) {
    this.values.push(val);
    this.bubbleUp();
  }

  public extractMax() {
    const max = this.values[0];
    const lastNode = this.values.pop();
    this.values[0] = lastNode;
    this.sinkDown();
    return max;
  }

  private sinkDown() {
    let idx = 0;
    let leftIdx = () => 2 * idx + 1;
    let rightIdx = () => 2 * idx + 2;
    while (this.values[idx] < this.values[leftIdx()] && this.values[idx] < this.values[rightIdx()]) {
      if (this.values[leftIdx()] > this.values[rightIdx()]) {
        const temp = this.values[idx];
        this.values[idx] = this.values[leftIdx()];
        this.values[leftIdx()] = temp;
        idx = leftIdx();
      } else {
        const temp = this.values[idx];
        this.values[idx] = this.values[rightIdx()];
        this.values[rightIdx()] = temp;
        idx = rightIdx();
      }
    }
  }

  private bubbleUp() {
    let idx = this.values.length - 1;
    let parentIdx = () => Math.floor((idx - 1) / 2);
    while (this.values[idx] > this.values[parentIdx()]) {
      const temp = this.values[parentIdx()];
      this.values[parentIdx()] = this.values[idx];
      this.values[idx] = temp;
      idx = parentIdx();
    }
  }
}
