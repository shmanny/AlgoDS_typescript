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
    return BinarySearchTree;
}());
var bst = new BinarySearchTree();
var random = function () { return Math.floor(Math.random() * 100); };
bst.insert(random());
bst.insert(random());
bst.insert(random());
bst.insert(random());
bst.insert(5);
console.log(bst.find(5));
