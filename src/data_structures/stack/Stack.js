"use strict";
exports.__esModule = true;
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.next = null;
    }
    return Node;
}());
exports.Node = Node;
var Stack = /** @class */ (function () {
    function Stack() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    Stack.prototype.push = function (val) {
        var newNode = new Node(val);
        if (!this.size) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            var temp = this.first;
            newNode.next = temp;
            this.first = newNode;
        }
        this.size++;
        return newNode;
    };
    Stack.prototype.print = function () {
        var current = this.first;
        for (var i = 0; i < this.size; i++) {
            console.log("" + current.value);
            current = current.next;
        }
    };
    return Stack;
}());
var stack = new Stack();
var random = function () { return Math.floor(Math.random() * 100); };
stack.push(random());
stack.push(random());
stack.push(random());
stack.push(random());
stack.print();
