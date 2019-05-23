var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this.values = [];
    }
    PriorityQueue.prototype.enqueue = function (val, priority) {
        this.values.push({ val: val, priority: priority });
        this.sort();
    };
    PriorityQueue.prototype.dequeue = function () {
        return this.values.shift();
    };
    PriorityQueue.prototype.sort = function () {
        this.values.sort(function (a, b) { return a.priority - b.priority; });
    };
    return PriorityQueue;
}());
var WeightedweightedGraph = /** @class */ (function () {
    function WeightedweightedGraph() {
        this.adjacencyList = {};
    }
    WeightedweightedGraph.prototype.addVertex = function (vertex) {
        if (!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = [];
    };
    WeightedweightedGraph.prototype.addEdge = function (vert1, vert2, weight) {
        if (this.adjacencyList[vert1] && this.adjacencyList[vert2]) {
            this.adjacencyList[vert1].push({ node: vert2, weight: weight });
            this.adjacencyList[vert2].push({ node: vert1, weight: weight });
        }
        else {
            throw Error('Both vertices do not exist');
        }
    };
    WeightedweightedGraph.prototype.DijkstrasAlgorithm = function (start, end) {
        var distances = {};
        var previous = {};
        var priorityQueue = new PriorityQueue();
        var smallestNode;
        var path = [];
        for (var vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                priorityQueue.enqueue(vertex, 0);
            }
            else {
                distances[vertex] = Infinity;
                priorityQueue.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        var _loop_1 = function () {
            smallestNode = priorityQueue.dequeue();
            var smallest = smallestNode.val;
            if (smallest === end) {
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                return "break";
            }
            if (smallest || distances[smallest] !== Infinity) {
                this_1.adjacencyList[smallest].forEach(function (_a) {
                    var neighbor = _a.node, distance = _a.weight;
                    var candidate = distances[smallest] + distance;
                    if (candidate < distances[neighbor]) {
                        distances[neighbor] = candidate;
                        previous[neighbor] = smallest;
                        priorityQueue.enqueue(neighbor, candidate);
                    }
                });
            }
        };
        var this_1 = this;
        while (priorityQueue.values.length) {
            var state_1 = _loop_1();
            if (state_1 === "break")
                break;
        }
        return path.concat(start).reverse();
    };
    return WeightedweightedGraph;
}());
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
