"use strict";
exports.__esModule = true;
exports.Node = exports.Stack = void 0;
var index_1 = require("../../index");
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
    }
    return Node;
}());
exports.Node = Node;
var Stack = /** @class */ (function () {
    function Stack(node) {
        if (node) {
            this.items = [node];
            this.length = 1;
        }
        else {
            this.items = [];
            this.length = 0;
        }
    }
    Stack.prototype.push = function (node) {
        this.length++;
        return this.items.push(node);
    };
    Stack.prototype.pop = function () {
        this.length--;
        return this.items.pop();
    };
    Stack.prototype.duplicate = function () {
        var top = this.pop();
        if (top) {
            this.push(top);
            this.push(top);
        }
    };
    Stack.prototype.peek = function () {
        return this.items[this.length - 1];
    };
    Stack.prototype.swap = function () {
        if (this.length >= 2) {
            var temp = this.items[this.length - 1];
            this.items[this.length - 1] = this.items[this.length - 2];
            this.items[this.length - 2] = temp;
        }
    };
    Stack.prototype.insertAt = function (node, n) {
        this.length++;
        var index = this.length - n;
        if (index >= 0 || index <= this.length - 1) {
            this.items.splice(index, 0, node);
        }
    };
    Stack.prototype.removeFrom = function (n) {
        var index = this.length - n;
        if (index >= 0 || index < this.length) {
            this.items.splice(index, 1);
            (0, index_1["default"])(this.items);
            this.length--;
        }
    };
    Stack.prototype.rightRotate = function (n) {
        var index = this.length - n;
        if (index >= 0 && index < this.length) {
            var item = this.pop();
            if (item) {
                this.insertAt(item, n);
            }
        }
    };
    Stack.prototype.leftRotate = function (n) {
        var index = this.length - n;
        var item = this.items[index];
        if (index >= 0 && index < this.length) {
            (0, index_1["default"])("================");
            this.removeFrom(n);
            (0, index_1["default"])("===========");
            (0, index_1["default"])(this.items);
            if (item) {
                this.push(item);
            }
        }
    };
    return Stack;
}());
exports.Stack = Stack;
