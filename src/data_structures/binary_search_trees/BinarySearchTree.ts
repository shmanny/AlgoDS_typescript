export class Node {
  public value: any;
  public left: Node;
  public right: Node;

  constructor(value: any) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  public root: Node;

  constructor() {
    this.root = null;
  }

  public insert(val: any): BinarySearchTree {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let nodeToCompare = this.root;
    while (true) {
      if (newNode.value === nodeToCompare.value) return undefined;
      if (newNode.value > nodeToCompare.value) {
        if (nodeToCompare.right === null) {
          nodeToCompare.right = newNode;
          return this;
        }
        nodeToCompare = nodeToCompare.right;
      }
      if (newNode.value < nodeToCompare.value) {
        if (nodeToCompare.left === null) {
          nodeToCompare.left = newNode;
          return this;
        }
        nodeToCompare = nodeToCompare.left;
      }
    }
  }

  public find(val: any): boolean {
    if (this.root === null) return false;
    let nodeToCompare = this.root;
    while (true) {
      if (nodeToCompare.value === val) return true;
      else if (val > nodeToCompare.value) {
        if (nodeToCompare.right === null) return false;
        nodeToCompare = nodeToCompare.right;
      } else if (val < nodeToCompare.value) {
        if (nodeToCompare.left === null) return false;
        nodeToCompare = nodeToCompare.left;
      }
    }
  }

  public BFS() {
    const queue = [],
      visited = [];
    let current = this.root;
    queue.push(current);
    while (queue.length) {
      current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      visited.push(current.value);
    }
    return visited;
  }

  public DFSPreOrder() {
    let current = this.root,
      visited = [];
    function traverse(node: Node) {
      visited.push(node.value);
      if (node.left !== null) traverse(node.left);
      if (node.right !== null) traverse(node.right);
    }
    traverse(current);
    return visited;
  }

  public DFSPostOrder() {
    let current = this.root,
      visited = [];
    function traverse(node: Node) {
      if (node.left !== null) traverse(node.left);
      if (node.right !== null) traverse(node.right);
      visited.push(node.value);
    }
    traverse(current);
    return visited;
  }

  public DFSInOrder() {
    let current = this.root,
      visited = [];
    function traverse(node: Node) {
      if (node.left !== null) traverse(node.left);
      visited.push(node.value);
      if (node.right !== null) traverse(node.right);
    }
    traverse(current);
    return visited;
  }
}

const bst = new BinarySearchTree();
const random = () => Math.floor(Math.random() * 100);
// const randoms = [random(), random(), random(), random(), random()];
const randoms = [10, 6, 15, 3, 8, 20];
console.log(randoms);
randoms.forEach(random => bst.insert(random));
console.log(bst.DFSInOrder());
