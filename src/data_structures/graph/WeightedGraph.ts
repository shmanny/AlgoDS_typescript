class PriorityQueue {
  public values: Array<any>;

  constructor() {
    this.values = [];
  }

  public enqueue(val: any, priority: number) {
    this.values.push({ val, priority });
    this.sort();
  }

  public dequeue() {
    return this.values.shift();
  }

  private sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedweightedGraph {
  public adjacencyList: Object;

  constructor() {
    this.adjacencyList = {};
  }

  public addVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  public addEdge(vert1: string, vert2: string, weight: number) {
    if (this.adjacencyList[vert1] && this.adjacencyList[vert2]) {
      this.adjacencyList[vert1].push({ node: vert2, weight });
      this.adjacencyList[vert2].push({ node: vert1, weight });
    } else {
      throw Error('Both vertices do not exist');
    }
  }

  public DijkstrasAlgorithm(start: string, end: string) {
    const distances = {};
    const previous = {};
    const priorityQueue = new PriorityQueue();
    let smallestNode;
    let path = [];

    for (const vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        priorityQueue.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        priorityQueue.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (priorityQueue.values.length) {
      smallestNode = priorityQueue.dequeue();
      let { val: smallest } = smallestNode;
      if (smallest === end) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        this.adjacencyList[smallest].forEach(({ node: neighbor, weight: distance }) => {
          const candidate = distances[smallest] + distance;
          if (candidate < distances[neighbor]) {
            distances[neighbor] = candidate;
            previous[neighbor] = smallest;
            priorityQueue.enqueue(neighbor, candidate);
          }
        });
      }
    }
    return path.concat(start).reverse();
  }
}

var weightedGraph = new WeightedweightedGraph();
weightedGraph.addVertex('A');
weightedGraph.addVertex('B');
weightedGraph.addVertex('C');
weightedGraph.addVertex('D');
weightedGraph.addVertex('E');
weightedGraph.addVertex('F');

weightedGraph.addEdge('A', 'B', 4);
weightedGraph.addEdge('A', 'C', 2);
weightedGraph.addEdge('B', 'E', 3);
weightedGraph.addEdge('C', 'D', 2);
weightedGraph.addEdge('C', 'F', 4);
weightedGraph.addEdge('D', 'E', 3);
weightedGraph.addEdge('D', 'F', 1);
weightedGraph.addEdge('E', 'F', 1);

console.log(weightedGraph.DijkstrasAlgorithm('A', 'E'));
