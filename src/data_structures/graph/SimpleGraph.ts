class Graph {
  private adjacencyList: Object;

  constructor() {
    this.adjacencyList = {};
  }

  public addVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
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

  public removeVertex(vertex: string) {
    if (this.adjacencyList[vertex]) {
      while (this.adjacencyList[vertex].length) {
        const adjacentVert = this.adjacencyList[vertex].pop();
        this.adjacencyList[adjacentVert] = this.adjacencyList[adjacentVert].filter(v => {
          v !== vertex;
        });
      }
    } else {
      throw Error(`Graph does not contain vertex: ${vertex}`);
    }
  }

  public DFSRecursive(start: string) {
    const visited = {};
    const results = [];
    const adjacencyList = this.adjacencyList;

    (function DFS(vertex?: string) {
      if (!vertex) return;
      visited[vertex] = true;
      results.push(vertex);
      for (let i = 0; i < adjacencyList[vertex].length; i++) {
        if (!visited[adjacencyList[vertex][i]]) {
          return DFS(adjacencyList[vertex][i]);
        }
      }
    })(start);
    return results;
  }

  public DFSIterative(start: string) {}
}
