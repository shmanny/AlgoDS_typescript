"use strict";
exports.__esModule = true;
var Node = /** @class */ (function () {
    function Node(val) {
        this.val = val;
        this.next = null;
    }
    return Node;
}());
exports.Node = Node;
var SinglyLinkedList = /** @class */ (function () {
    function SinglyLinkedList() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    SinglyLinkedList.prototype.push = function (val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
        return this;
    };
    SinglyLinkedList.prototype.pop = function () {
        if (!this.length)
            return;
        var current = this.head;
        var newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length -= 1;
        if (!this.length) {
            this.head = null;
            this.tail = null;
        }
        return current;
    };
    SinglyLinkedList.prototype.shift = function () {
        if (!this.length)
            return;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length -= 1;
        if (this.length) {
            this.tail = null;
        }
        return currentHead;
    };
    SinglyLinkedList.prototype.unshift = function (val) {
        var newHead = new Node(val);
        if (!this.length) {
            this.head = newHead;
            this.tail = newHead;
        }
        else {
            var currentHead = this.head;
            this.head = newHead;
            newHead.next = currentHead;
        }
        this.length += 1;
        return this;
    };
    SinglyLinkedList.prototype.get = function (index) {
        if (index < 0 || index >= this.length)
            return null;
        if (index === 0)
            return this.head;
        var value = this.head;
        for (var i = 1; i < index; i++)
            value = value.next;
        return value;
    };
    SinglyLinkedList.prototype.set = function (index, value) {
        var node = this.get(index);
        if (!node)
            return false;
        else {
            node.val = value;
            return true;
        }
    };
    SinglyLinkedList.prototype.insert = function (index, val) {
        if (index < 0 || index > this.length)
            return false;
        if (index === this.length)
            return !!this.push(val);
        if (index === 0)
            return !!this.unshift(val);
        var newNode = new Node(val);
        var before = this.get(index - 1);
        var after = before.next;
        before.next = newNode;
        newNode.next = after;
        this.length++;
        return true;
    };
    SinglyLinkedList.prototype.remove = function (index) {
        if (index < 0 || index > this.length)
            return undefined;
        if (index === this.length - 1)
            return !!this.pop();
        if (index === 0)
            return !!this.shift();
        var before = this.get(index - 1);
        var temp = before.next;
        var after = temp.next;
        before.next = after;
        this.length -= 1;
        return temp.val;
    };
    /* Initialize three pointers: current, next, and prev. Set current to the head and set both prev and next to be null.
    Starting at the begging of the list, store the next node after current in the variable "next". Set the next property of
    "current" to be the empty node "prev". Set the value of "prev" to be the value of current. Set the value of current to be
    the value of next. After the first iteration, you should have prev as the original head, and both previous and next as the
    node immediately after the head. Repeat this process until you reach the end of the list.   */
    SinglyLinkedList.prototype.reverse = function () {
        var current = this.head;
        this.tail = current;
        var prev;
        var next;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
        this.tail.next = null;
        return this;
    };
    SinglyLinkedList.prototype.print = function () {
        var nodes = [];
        var current = this.head;
        for (var i = 0; i < this.length; i++) {
            nodes.push(current.val);
            current = current.next;
        }
        console.log(nodes.join(' -> '));
    };
    return SinglyLinkedList;
}());
var list = new SinglyLinkedList();
var random = function () { return Math.floor(Math.random() * 100); };
list.push(random());
list.push(random());
list.push(random());
list.push(random());
list.print();
console.log(list);
list.reverse();
console.log(list);
list.print();
