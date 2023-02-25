import { Queue, NodeQueue } from "../../algo/data-structure/queue";
import { describe, expect, jest, test, beforeEach, it } from "@jest/globals";

describe("Queue", () => {
  let queue: Queue<number>;
  beforeEach(() => {
    queue = new Queue(new NodeQueue(1));
  });

  test("enqueue should add items to the queue", () => {
    queue.enqueue(new NodeQueue(2));
    queue.enqueue(new NodeQueue(3));
    expect(queue.length).toBe(3);
  });

  test("dequeue should remove items from the queue", () => {
    queue.enqueue(new NodeQueue(2));
    queue.enqueue(new NodeQueue(3));
    const item = queue.dequeue();
    expect(item?.value).toBe(1);
    expect(queue.length).toBe(2);
  });

  test("peek should return the first item in the queue", () => {
    queue.enqueue(new NodeQueue(2));
    queue.enqueue(new NodeQueue(3));
    const item = queue.peek();
    expect(item?.value).toBe(1);
  });

  test("isEmpty should return true if the queue is empty", () => {
    expect(queue.isEmpty()).toBe(false);
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  test("printQueue should log all items in the queue", () => {
    console.log = jest.fn();
    queue.enqueue(new NodeQueue(2));
    queue.enqueue(new NodeQueue(3));
    queue.printQueue();
    expect(console.log).toHaveBeenCalledWith(" 1 ");
    expect(console.log).toHaveBeenCalledWith(" 2 ");
    expect(console.log).toHaveBeenCalledWith(" 3 ");
  });
});
