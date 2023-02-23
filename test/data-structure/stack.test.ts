import {describe, expect, jest, test,beforeEach,it} from '@jest/globals';
import { Node, Stack } from '../../algo/data-structure/stack';


describe('Stack', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>(new Node<number>(1));
  });

  describe('push', () => {
    it('should add a node to the top of the stack', () => {
      stack.push(new Node<number>(2));
      expect(stack.peek()?.value).toBe(2);
    });
  });

  describe('pop', () => {
    it('should remove and return the top node of the stack', () => {
      const node = stack.pop();
      expect(node?.value).toBe(1);
      expect(stack.peek()?.value).toBe(undefined);
    });
  });

  describe('duplicate', () => {
    it('should duplicate the top node of the stack', () => {
      stack.push(new Node<number>(2));
      stack.duplicate();
      expect(stack.peek()?.value).toBe(2);
      expect(stack.pop()?.value).toBe(2);
      expect(stack.pop()?.value).toBe(2);
    });
  });

  describe('peek', () => {
    it('should return the top node of the stack', () => {
      expect(stack.peek()?.value).toBe(1);
    });
  });

  describe('swap', () => {
    it('should swap the positions of the top two nodes on the stack', () => {
      stack.push(new Node<number>(2));
      stack.swap();
      expect(stack.pop()?.value).toBe(1);
      expect(stack.pop()?.value).toBe(2);
    });

    it('should not swap anything if there are fewer than 2 nodes on the stack', () => {
      stack.swap();
      expect(stack.pop()?.value).toBe(1);
      expect(stack.pop()).toBe(undefined);
    });
  });

  describe('insertAt', () => {
    it('should insert a node at the given index', () => {
      stack.insertAt(new Node<number>(2), 0);
      expect(stack.pop()?.value).toBe(2);
      expect(stack.pop()?.value).toBe(1);
    });

    it('should increase the length of the stack', () => {
      stack.insertAt(new Node<number>(2), 0);
      expect(stack.length).toBe(2);
    });
  });

  describe('removeFrom', () => {
    it('should remove the node at the given index', () => {
      stack.push(new Node<number>(2));
      stack.removeFrom(0);
      expect(stack.pop()?.value).toBe(2);
      expect(stack.pop()?.value).toBe(1);
    });

    it('should decrease the length of the stack', () => {
      stack.push(new Node<number>(2));
      stack.removeFrom(0);
      expect(stack.length).toBe(1);
    });
  });

  describe('rightRotate', () => {
    it('should rotate the stack to the right by the given number of positions', () => {
      stack.push(new Node<number>(2));
      stack.push(new Node<number>(3));
      stack.push(new Node<number>(4));
      stack.rightRotate(2);
      expect(stack.pop()?.value).toBe(3);
      expect(stack.pop()?.value).toBe(4);
      expect(stack.pop()?.value).toBe(2);
      expect(stack.pop()?.value).toBe(1);
    });

    it('should not do anything if the index is out of bounds', () => {
      stack.rightRotate(2);
      expect(stack.pop()?.value).toBe(1);
      expect(stack.pop()).toBe(undefined);
    });

  describe('leftRotate', () => {
    it('should rotate the stack to the left by n elements', () => {
      const stack = new Stack<number>(new Node<number>(1));
      stack.push(new Node<number>(2));
      stack.push(new Node<number>(3));
      stack.push(new Node<number>(4));
      stack.push(new Node<number>(5));
  
      // Rotate the stack to the left by 3 elements
      stack.leftRotate(3);
  
      // 1 2 3 4 5
      expect(stack.pop()?.value).toBe(3);
      expect(stack.pop()?.value).toBe(5);
      expect(stack.pop()?.value).toBe(4);
      expect(stack.pop()?.value).toBe(2);
      expect(stack.pop()?.value).toBe(1);
    });
  
    it('should not rotate the stack if n is zero', () => {
      const stack = new Stack<number>(new Node<number>(1));
      stack.push(new Node<number>(2));
      stack.push(new Node<number>(3));
      stack.push(new Node<number>(4));
      stack.push(new Node<number>(5));
  
      // Rotate the stack to the left by 0 elements
      stack.leftRotate(0);
  
      // The stack should still be [1, 2, 3, 4, 5]
      expect(stack.pop()?.value).toBe(5);
      expect(stack.pop()?.value).toBe(4);
      expect(stack.pop()?.value).toBe(3);
      expect(stack.pop()?.value).toBe(2);
      expect(stack.pop()?.value).toBe(1);
    });
  
    it('should not rotate the stack if n is greater than or equal to the stack length', () => {
      const stack = new Stack<number>(new Node<number>(1));
      stack.push(new Node<number>(21));
      stack.push(new Node<number>(31));
      stack.push(new Node<number>(41));
      stack.push(new Node<number>(51));
  
      // Rotate the stack to the left by 5 elements (equal to the stack length)
      stack.leftRotate(5);
  
      // The stack should still be [1, 2, 3, 4, 5]
      expect(stack.pop()?.value).toBe(1);
      expect(stack.pop()?.value).toBe(51);
      expect(stack.pop()?.value).toBe(41);
      expect(stack.pop()?.value).toBe(31);
      expect(stack.pop()?.value).toBe(21);
  
      // Rotate the stack to the left by 6 elements (greater than the stack length)
      stack.leftRotate(6);
  
      // The stack should still be empty
      expect(stack.pop()).toBe(undefined);
    });
  });
})})