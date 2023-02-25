import log from "../../index";

class NodeQueue<T> {
  value: T;
  constructor(value: T) {
    this.value = value;
  }
}

type QueueItemsType<T> = { [index: number]: NodeQueue<T> };

class Queue<T> {
  items: QueueItemsType<T>;
  length: number;
  frontIndex: number;

  constructor(node: NodeQueue<T>) {
    this.items = {
      0: node,
    };
    this.length = 1;
    this.frontIndex = 0;
  }
  enqueue(node: NodeQueue<T>) {
    if (!this.isEmpty()) {
      this.length++;
      this.items[this.length] = node;
      return node;
    }
    return null;
  }
  dequeue() {
    if (!this.isEmpty()) {
      let item = this.items[this.frontIndex];
      delete this.items[this.frontIndex];
      this.frontIndex++;
      this.length--;
      return item;
    }
    return null;
  }
  peek() {
    return this.items[this.frontIndex];
  }
  isEmpty() {
    return this.length == 0;
  }
  printQueue() {
    for (const key in this.items) {
      console.log(` ${this.items[key].value} `);
    }
  }
}

export { Queue, NodeQueue };
