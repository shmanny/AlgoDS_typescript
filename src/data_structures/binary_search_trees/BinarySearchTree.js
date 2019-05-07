"use strict";
exports.__esModule = true;
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return Node;
}());
exports.Node = Node;
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
    }
    BinarySearchTree.prototype.insert = function (val) {
        var newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        var nodeToCompare = this.root;
        while (true) {
            if (newNode.value === nodeToCompare.value)
                return undefined;
            if (newNode.value > nodeToCompare.value) {
                if (nodeToCompare.right === null) {
                    nodeToCompare.right = newNode;
                    return this;
                }
                nodeToCompare = nodeToCompare.right;
            }
            if (newNode.value < nodeToCompare.value) {
                if (nodeToCompare.left === null) {
                    nodeToCompare.left = newNode;
                    return this;
                }
                nodeToCompare = nodeToCompare.left;
            }
        }
    };
    BinarySearchTree.prototype.find = function (val) {
        if (this.root === null)
            return false;
        var nodeToCompare = this.root;
        while (true) {
            if (nodeToCompare.value === val)
                return true;
            else if (val > nodeToCompare.value) {
                if (nodeToCompare.right === null)
                    return false;
                nodeToCompare = nodeToCompare.right;
            }
            else if (val < nodeToCompare.value) {
                if (nodeToCompare.left === null)
                    return false;
                nodeToCompare = nodeToCompare.left;
            }
        }
    };
    BinarySearchTree.prototype.BFS = function () {
        var queue = [], visited = [];
        var current = this.root;
        queue.push(current);
        while (queue.length) {
            current = queue.shift();
            if (current.left)
                queue.push(current.left);
            if (current.right)
                queue.push(current.right);
            visited.push(current.value);
        }
        return visited;
    };
    BinarySearchTree.prototype.DFSPreOrder = function () {
        var current = this.root, visited = [];
        function traverse(node) {
            visited.push(node.value);
            if (node.left !== null)
                traverse(node.left);
            if (node.right !== null)
                traverse(node.right);
        }
        traverse(current);
        return visited;
    };
    BinarySearchTree.prototype.DFSPostOrder = function () {
        var current = this.root, visited = [];
        function traverse(node) {
            if (node.left !== null)
                traverse(node.left);
            if (node.right !== null)
                traverse(node.right);
            visited.push(node.value);
        }
        traverse(current);
        return visited;
    };
    BinarySearchTree.prototype.DFSInOrder = function () {
        var current = this.root, visited = [];
        function traverse(node) {
            if (node.left !== null)
                traverse(node.left);
            visited.push(node.value);
            if (node.right !== null)
                traverse(node.right);
        }
        traverse(current);
        return visited;
    };
    return BinarySearchTree;
}());
var bst = new BinarySearchTree();
var random = function () { return Math.floor(Math.random() * 100); };
// const randoms = [random(), random(), random(), random(), random()];
var randoms = [10, 6, 15, 3, 8, 20];
console.log(randoms);
randoms.forEach(function (random) { return bst.insert(random); });
console.log(bst.DFSInOrder());
