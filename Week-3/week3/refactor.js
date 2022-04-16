function createStack() {
    const items = [];
    // declaring items array with const || let make it block scope
    // so we can't access value outside the block
    return {
       push(item) {
        items.push(item);
      },
      pop() {
        return items.pop();
      }
    };
  }

const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.items,stack.pop())