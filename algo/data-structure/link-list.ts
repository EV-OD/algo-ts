import log from "../..";

class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
  addNext(node: Node<T>) {
    this.next = node;
  }
}

class LinkList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  length: number;
  constructor(node: Node<T>) {
    this.head = node;
    this.tail = node;
    this.length = 1;
  }
  push(node: Node<T>) {
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.addNext(node);
      this.tail = node;
    }
    this.length++;
  }
  iteration(func: (curreent: Node<T>, index: number) => void) {
    let current = this.head;
    let index = 0;
    while (current != null) {
      func(current, index);
      current = current.next;
      index++;
    }
  }
  reverse() {
    if (this.head !== null) {
      let current: Node<T> | null = this.head;
      this.tail = this.head;
      let next = current.next;
      let prev: Node<T> | null = null;
      while (next) {
        if (current !== null) {
          next = current.next;
          if (current == this.head) {
            current.next = null;
          } else {
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
  }
  reverseRec(current = this.head, prev: null | Node<T> = null) {
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
    } else {
      this.reverseRec(current.next, current);
      current.next = prev;
    }
  }

  len() {
    let index = 0;
    this.iteration((_c, i) => {
      index++;
    });
    return index;
  }
  recursive(
    func: (curreent: Node<T>, index: number) => void,
    node = this.head,
    i = 0
  ) {
    func(node as Node<T>, i);
    i++;
    if (!node) {
      return;
    }
    if (node.next) {
      this.recursive(func, node.next, i);
    }
  }
  display() {
    this.iteration((current) => {
      log(current.value);
    });
  }
  shift() {
    if (this.head) {
      this.head = this.head.next;
      this.length--;
    }
  }
  pop() {
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }
    this.recursive((node) => {
      if (node.next == this.tail) {
        this.tail = node;
        node.next = null;
      }
    });
    this.length--;
  }
  delMiddle() {
    if (!this.head) {
      return;
    }
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else if (this.head.next === this.tail) {
      this.head.next = null;
      this.tail = this.head;
    } else {
      let middle = Math.floor((this.length + 1) / 2);

      this.iteration((node, i) => {
        if (i + 2 == middle) {
          if (node.next) {
            node.next = node.next.next;
          }
        }
      });
    }
    this.length--;
  }
  delete(index: number) {
    if (index === 0) {
      this.head = null;
      this.tail = null;
    }
    this.iteration((node, i) => {
      if (i + 1 == index) {
        if (node.next && node.next.next) {
          node.next = node.next.next;
        } else {
          node.next = null;
        }
      }
    });
  }
  getNthNode(index: number): Node<T> | null {
    let value = null;
    this.recursive((node, i) => {
      if (i === index) {
        value = node;
      }
    });
    return value;
  }
}

export { LinkList, Node };
