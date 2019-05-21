class Graph {
  private adjacencyList: Object;

  constructor() {
    this.adjacencyList = {};
  }

  public addcurrentVertex(currentVertex: string) {
    if (!this.adjacencyList[currentVertex]) this.adjacencyList[currentVertex] = [];
  }

  public addEdge(vert1: string, vert2: string) {
    if (this.adjacencyList[vert1] && this.adjacencyList[vert2]) {
      this.adjacencyList[vert1].push(vert2);
      this.adjacencyList[vert2].push(vert1);
    } else {
      throw Error(`Graph does not contain both vertices`);
    }
  }

  public removeEdge(vert1: string, vert2: string) {
    if (this.adjacencyList[vert1] && this.adjacencyList[vert2]) {
      this.adjacencyList[vert1] = this.adjacencyList[vert1].filter(v => v !== vert2);
      this.adjacencyList[vert2] = this.adjacencyList[vert2].filter(v => v !== vert1);
    } else {
      throw Error(`Graph does not contain both vertices`);
    }
  }

  public removecurrentVertex(currentVertex: string) {
    if (this.adjacencyList[currentVertex]) {
      while (this.adjacencyList[currentVertex].length) {
        const adjacentVert = this.adjacencyList[currentVertex].pop();
        this.adjacencyList[adjacentVert] = this.adjacencyList[adjacentVert].filter(v => {
          v !== currentVertex;
        });
      }
    } else {
      throw Error(`Graph does not contain currentVertex: ${currentVertex}`);
    }
  }

  public DFSRecursive(start: string) {
    const visited = {};
    const results = [];
    const adjacencyList = this.adjacencyList;

    (function DFS(currentVertex?: string) {
      if (!currentVertex) return;
      visited[currentVertex] = true;
      results.push(currentVertex);
      for (let i = 0; i < adjacencyList[currentVertex].length; i++) {
        if (!visited[adjacencyList[currentVertex][i]]) {
          return DFS(adjacencyList[currentVertex][i]);
        }
      }
    })(start);
    return results;
  }

  public DFSIterative(start: string) {
    const vertices = [start];
    const visited = {};
    const results = [];

    visited[start] = true;
    let currentVertex;

    while (vertices.length) {
      currentVertex = vertices.pop();
      results.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          vertices.push(neighbor);
        }
      });
    }

    return results;
  }

  public BFSIterative(start: string) {
    const queue = [start];
    const results = [];
    const visited = {};

    visited[start] = true;
    let currentVertex;

    while (queue.length) {
      currentVertex = queue.shift();
      results.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
  }
}
