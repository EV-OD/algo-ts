"use strict";
exports.__esModule = true;
exports.Node = exports.LinkList = void 0;
var __1 = require("../..");
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.next = null;
    }
    Node.prototype.addNext = function (node) {
        this.next = node;
    };
    return Node;
}());
exports.Node = Node;
var LinkList = /** @class */ (function () {
    function LinkList(node) {
        this.head = node;
        this.tail = node;
        this.length = 1;
    }
    LinkList.prototype.push = function (node) {
        if (this.tail === null) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.addNext(node);
            this.tail = node;
        }
        this.length++;
    };
    LinkList.prototype.iteration = function (func) {
        var current = this.head;
        var index = 0;
        while (current != null) {
            func(current, index);
            current = current.next;
            index++;
        }
    };
    LinkList.prototype.reverse = function () {
        if (this.head !== null) {
            var current = this.head;
            this.tail = this.head;
            var next = current.next;
            var prev = null;
            while (next) {
                if (current !== null) {
                    next = current.next;
                    if (current == this.head) {
                        current.next = null;
                    }
                    else {
                        current.next = prev;
                    }
                    if (next === null) {
                        this.head = current;
                    }
                    prev = current;
                    current = next;
                }
            }
        }
    };
    LinkList.prototype.reverseRec = function (current, prev) {
        if (current === void 0) { current = this.head; }
        if (prev === void 0) { prev = null; }
        if (current === null) {
            return;
        }
        if (current.next === null) {
            this.head = current;
            current.next = prev;
            return;
        }
        if (current == this.head) {
            this.tail = current;
            this.reverseRec(current.next, current);
            current.next = prev;
        }
        else {
            this.reverseRec(current.next, current);
            current.next = prev;
        }
    };
    LinkList.prototype.len = function () {
        var index = 0;
        this.iteration(function (_c, i) {
            (0, __1["default"])("d" + i);
            index++;
        });
        return index;
    };
    LinkList.prototype.recursive = function (func, node, i) {
        if (node === void 0) { node = this.head; }
        if (i === void 0) { i = 0; }
        func(node, i);
        i++;
        if (!node) {
            return;
        }
        if (node.next) {
            this.recursive(func, node.next, i);
        }
    };
    LinkList.prototype.display = function () {
        this.iteration(function (current) {
            (0, __1["default"])(current.value);
        });
    };
    LinkList.prototype.shift = function () {
        if (this.head) {
            this.head = this.head.next;
            this.length--;
        }
    };
    LinkList.prototype.pop = function () {
        var _this = this;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
        this.recursive(function (node) {
            if (node.next == _this.tail) {
                _this.tail = node;
                node.next = null;
            }
        });
        this.length--;
    };
    LinkList.prototype.delMiddle = function () {
        if (!this.head) {
            return;
        }
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
        else if (this.head.next === this.tail) {
            this.head.next = null;
            this.tail = this.head;
        }
        else {
            var middle_1 = Math.floor((this.length + 1) / 2);
            this.iteration(function (node, i) {
                if (i + 2 == middle_1) {
                    if (node.next) {
                        node.next = node.next.next;
                    }
                }
            });
        }
        this.length--;
    };
    LinkList.prototype["delete"] = function (index) {
        if (index === 0) {
            this.head = null;
            this.tail = null;
        }
        this.iteration(function (node, i) {
            if (i + 1 == index) {
                if (node.next && node.next.next) {
                    node.next = node.next.next;
                }
                else {
                    node.next = null;
                }
            }
        });
    };
    LinkList.prototype.getNthNode = function (index) {
        var value = null;
        this.recursive(function (node, i) {
            if (i === index) {
                value = node;
            }
        });
        return value;
    };
    return LinkList;
}());
exports.LinkList = LinkList;
