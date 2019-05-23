"use strict";
exports.__esModule = true;
var Node = /** @class */ (function () {
    function Node(val, priority) {
        this.value = val;
        this.priority = priority;
    }
    return Node;
}());
exports.Node = Node;
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this.queue = [];
    }
    PriorityQueue.prototype.enqueue = function (val, priority) {
        var newNode = new Node(val, priority);
        this.queue.push(newNode);
        this.bubbleUp();
    };
    PriorityQueue.prototype.dequeue = function () {
        var highestPriority = this.queue[0];
        var lastNode = this.queue.pop();
        this.queue[0] = lastNode;
        this.sinkDown();
        return highestPriority;
    };
    PriorityQueue.prototype.bubbleUp = function () {
        var idx = this.queue.length - 1;
        var parentIdx = function () { return Math.floor((idx - 1) / 2); };
        while (this.queue[parentIdx()] && this.queue[idx].priority < this.queue[parentIdx()].priority) {
            var temp = this.queue[parentIdx()];
            this.queue[parentIdx()] = this.queue[idx];
            this.queue[idx] = temp;
            idx = parentIdx();
        }
    };
    PriorityQueue.prototype.sinkDown = function () {
        var idx = 0;
        var length = this.queue.length;
        var element = this.queue[0];
        while (true) {
            var leftChildIdx = 2 * idx + 1;
            var rightChildIdx = 2 * idx + 2;
            var leftChild = void 0, rightChild = void 0;
            var swap = null;
            if (leftChildIdx < length) {
                leftChild = this.queue[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.queue[rightChildIdx];
                if ((swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null)
                break;
            this.queue[idx] = this.queue[swap];
            this.queue[swap] = element;
            idx = swap;
        }
    };
    return PriorityQueue;
}());
exports.PriorityQueue = PriorityQueue;
