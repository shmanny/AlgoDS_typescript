class Graph {
  private adjacencyList: Object;

  constructor() {
    this.adjacencyList = {};
  }

  public addVertex(vertexName: string) {
    if (!this.adjacencyList[vertexName]) this.adjacencyList[vertexName] = [];
    else throw Error(`${vertexName} already exists!`);
  }

  public addEdge(vert1: string, vert2: string) {
    if (this.adjacencyList[vert1] && this.adjacencyList[vert2]) {
      if (!this.adjacencyList[vert1]) throw Error(`${vert1} does not exist!`);
      this.adjacencyList[vert1].push(vert2);
      if (!this.adjacencyList[vert2]) throw Error(`${vert2} doest not exist!`);
      this.adjacencyList[vert2].push(vert2);
    } else {
      throw Error('Neither vertex exists!');
    }
  }

  public removeEdge(vert1: string, vert2: string) {
    this.adjacencyList[vert1] = this.adjacencyList[vert1].filter(v => v !== vert2);
    this.adjacencyList[vert2] = this.adjacencyList[vert2].filter(v => v !== vert1);
  }

  public removeVertex(vertex: string) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVert = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVert);
    }
    delete this.adjacencyList[vertex];
  }

  public DFSRecursive(start: string) {
    const visited = {};
    const results = [];
    (function DFS(vertex?: string) {
      if (!vertex) return null;
      visited[vertex] = true;
      results.push(vertex);
      this.adjacencyList[vertex].forEach(e => {
        if (!this.visited[e]) {
          DFS(e);
        }
      });
    })(start);
    return results;
  }

  public DFSIterative(start: string) {
    const stack = [],
      results = [],
      visited = {};
    stack.push(start);
    results.push(start);
    visited[start] = true;
    while (stack.length) {
      const vertex = stack.pop();
      if (!visited[vertex]) {
        visited[vertex] = true;
        results.push(vertex);
        stack.push.apply(this.adjacencyList[vertex]);
      }
    }
    return results;
  }
}

const graph = new Graph();
graph.addVertex('San Francisco');
graph.addVertex('Tokyo');
graph.addVertex('New York City');
graph.addVertex('Paris');
graph.addVertex('Austin');
graph.addVertex('Denver');
graph.addVertex('Miami');
graph.addEdge('Miami', 'New York City');
graph.addEdge('Miami', 'Austin');
graph.addEdge('Miami', 'Paris');
