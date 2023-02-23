import log from "./index"

import { Stack , NodeStack} from "./algo/data-structure/stack";


const stack = new Stack<number>(new NodeStack<number>(1));
stack.push(new NodeStack<number>(2));
stack.push(new NodeStack<number>(3));
stack.push(new NodeStack<number>(4));
stack.push(new NodeStack<number>(5));

// Rotate the stack to the left by 3 elements
stack.leftRotate(3);

log(stack.pop()?.value)
log(stack.pop()?.value)
log(stack.pop()?.value)
log(stack.pop()?.value)
log(stack.pop()?.value)


