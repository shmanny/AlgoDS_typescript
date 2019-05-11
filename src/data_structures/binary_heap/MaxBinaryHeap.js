var MaxBinaryHeap = /** @class */ (function () {
    function MaxBinaryHeap() {
        this.values = [];
    }
    MaxBinaryHeap.prototype.insert = function (val) {
        this.values.push(val);
        this.bubbleUp();
    };
    MaxBinaryHeap.prototype.extractMax = function () {
        var max = this.values[0];
        var lastNode = this.values[this.values.length - 1];
        this.values[0] = lastNode;
        this.values.pop();
        this.sinkDown();
        return max;
    };
    MaxBinaryHeap.prototype.sinkDown = function () {
        var idx = 0;
        var leftIdx = function () { return 2 * idx + 1; };
        var rightIdx = function () { return 2 * idx + 2; };
        while (this.values[idx] < this.values[leftIdx()] && this.values[idx] < this.values[rightIdx()]) {
            if (this.values[leftIdx()] > this.values[rightIdx()]) {
                var temp = this.values[idx];
                this.values[idx] = this.values[leftIdx()];
                this.values[leftIdx()] = temp;
                idx = leftIdx();
            }
            else {
                var temp = this.values[idx];
                this.values[idx] = this.values[rightIdx()];
                this.values[rightIdx()] = temp;
                idx = rightIdx();
            }
        }
    };
    MaxBinaryHeap.prototype.bubbleUp = function () {
        var idx = this.values.length - 1;
        var parentIdx = function () { return Math.floor((idx - 1) / 2); };
        while (this.values[idx] > this.values[parentIdx()]) {
            var temp = this.values[parentIdx()];
            this.values[parentIdx()] = this.values[idx];
            this.values[idx] = temp;
            idx = parentIdx();
        }
    };
    return MaxBinaryHeap;
}());
