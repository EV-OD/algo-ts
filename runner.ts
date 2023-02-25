import log from "./index";

import { NodeQueue, Queue } from "./algo/data-structure/queue";

let queue;

queue = new Queue(new NodeQueue(1));
queue.enqueue(new NodeQueue(2));
queue.enqueue(new NodeQueue(3));
const item = queue.dequeue();
log(item);
