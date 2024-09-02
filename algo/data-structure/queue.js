"use strict";
exports.__esModule = true;
exports.NodeQueue = exports.Queue = void 0;
var NodeQueue = /** @class */ (function () {
    function NodeQueue(value) {
        this.value = value;
    }
    return NodeQueue;
}());
exports.NodeQueue = NodeQueue;
var Queue = /** @class */ (function () {
    function Queue(node) {
        this.items = {
            0: node
        };
        this.length = 1;
        this.frontIndex = 0;
    }
    Queue.prototype.enqueue = function (node) {
        if (!this.isEmpty()) {
            this.length++;
            this.items[this.length] = node;
            return node;
        }
        return null;
    };
    Queue.prototype.dequeue = function () {
        if (!this.isEmpty()) {
            var item = this.items[this.frontIndex];
            delete this.items[this.frontIndex];
            this.frontIndex++;
            this.length--;
            return item;
        }
        return null;
    };
    Queue.prototype.peek = function () {
        return this.items[this.frontIndex];
    };
    Queue.prototype.isEmpty = function () {
        return this.length == 0;
    };
    Queue.prototype.printQueue = function () {
        for (var key in this.items) {
            console.log(" ".concat(this.items[key].value, " "));
        }
    };
    return Queue;
}());
exports.Queue = Queue;
