"use strict";
var _a, _b, _c, _d, _e;
exports.__esModule = true;
var index_1 = require("./index");
var stack_1 = require("./algo/data-structure/stack");
var stack = new stack_1.Stack(new stack_1.Node(1));
stack.push(new stack_1.Node(2));
stack.push(new stack_1.Node(3));
stack.push(new stack_1.Node(4));
stack.push(new stack_1.Node(5));
// Rotate the stack to the left by 3 elements
stack.leftRotate(3);
(0, index_1["default"])((_a = stack.pop()) === null || _a === void 0 ? void 0 : _a.value);
(0, index_1["default"])((_b = stack.pop()) === null || _b === void 0 ? void 0 : _b.value);
(0, index_1["default"])((_c = stack.pop()) === null || _c === void 0 ? void 0 : _c.value);
(0, index_1["default"])((_d = stack.pop()) === null || _d === void 0 ? void 0 : _d.value);
(0, index_1["default"])((_e = stack.pop()) === null || _e === void 0 ? void 0 : _e.value);
