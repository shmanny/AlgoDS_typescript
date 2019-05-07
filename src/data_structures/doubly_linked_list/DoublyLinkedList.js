"use strict";
exports.__esModule = true;
var Node = /** @class */ (function () {
    function Node(val) {
        this.val = val;
        this.next = null;
        this.previous = null;
    }
    return Node;
}());
exports.Node = Node;
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    DoublyLinkedList.prototype.push = function (val) {
        var newTail = new Node(val);
        if (!this.length) {
            this.head = newTail;
            this.tail = newTail;
        }
        else {
            var currentTail = this.tail;
            this.tail = newTail;
            newTail.previous = currentTail;
            currentTail.next = newTail;
        }
        this.length++;
        return this;
    };
    DoublyLinkedList.prototype.pop = function () {
        if (!this.head)
            return undefined;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            var newTail = this.tail.previous;
            this.tail = newTail;
            this.tail.next = null;
        }
        this.length--;
        return this;
    };
    DoublyLinkedList.prototype.shift = function () {
        if (!this.head)
            return undefined;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            var newHead = this.head.next;
            this.head.next = null;
            newHead.previous = null;
            this.head = newHead;
        }
        this.length--;
        return this;
    };
    DoublyLinkedList.prototype.unshift = function (val) {
        var newHead = new Node(val);
        if (!this.head) {
            this.head = newHead;
            this.tail = newHead;
        }
        else {
            var oldHead = this.head;
            newHead.next = oldHead;
            oldHead.previous = newHead;
            this.head = newHead;
        }
        this.length++;
        return this;
    };
    DoublyLinkedList.prototype.get = function (index) {
        if (index < 0 || index >= this.length)
            return null;
        if (index === 0)
            return this.head;
        if (index === this.length - 1)
            return this.tail;
        var current;
        if (index < Math.floor(this.length / 2)) {
            var i = 0;
            current = this.head;
            while (i !== index) {
                current = current.next;
                i++;
            }
        }
        else {
            var i = this.length - 1;
            current = this.tail;
            while (i !== index) {
                current = current.prev;
                i--;
            }
        }
        return current;
    };
    DoublyLinkedList.prototype.set = function (index, value) {
        var node = this.get(index);
        if (node) {
            node.val = value;
            return true;
        }
        return false;
    };
    DoublyLinkedList.prototype.insert = function (index, val) {
        if (index < 0 || index > this.length)
            return null;
        if (index === 0)
            return this.unshift(val);
        if (index === this.length)
            return this.push(val);
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var next = prev.next;
        prev.next = newNode;
        newNode.next = next;
        newNode.previous = prev;
        this.length++;
        return this;
    };
    DoublyLinkedList.prototype.print = function () {
        if (!this.length) {
            console.log('The list is empty, yo');
            return;
        }
        else {
            var nodes = [];
            var current = this.head;
            for (var i = 0; i < this.length; i++) {
                nodes.push(current.val);
                current = current.next;
            }
            console.log(nodes.join(' <-> '));
        }
    };
    return DoublyLinkedList;
}());
/*
  Used to generate a random linked list of length 4 for testing
*/
var list = new DoublyLinkedList();
var random = function () { return Math.floor(Math.random() * 100); };
list.push(random());
list.push(random());
list.push(random());
list.push(random());
list.print();
list.insert(1, 23);
list.print();
