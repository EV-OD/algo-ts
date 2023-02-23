import log from "./index"

import { Stack , Node} from "./algo/data-structure/stack";


const stack = new Stack<number>(new Node<number>(1));
stack.push(new Node<number>(2));
stack.push(new Node<number>(3));
stack.push(new Node<number>(4));
stack.push(new Node<number>(5));

// Rotate the stack to the left by 3 elements
stack.leftRotate(3);

log(stack.pop()?.value)
log(stack.pop()?.value)
log(stack.pop()?.value)
log(stack.pop()?.value)
log(stack.pop()?.value)


