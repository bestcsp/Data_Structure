interface IStack<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    size(): number;
  }

  class Stack<T> implements IStack<T> {
    private storage: T[] = [];
  
    constructor(private capacity: number = Infinity) {}
  
    push(item: T): void {
      if (this.size() === this.capacity) {
        throw Error("Stack has reached max capacity, you cannot add more items");
      }
      this.storage.push(item);
    }
  
    pop(): T | undefined {
      return this.storage.pop();
    }
  
    peek(): T | undefined {
      return this.storage[this.size() - 1];
    }
  
    size(): number {
      return this.storage.length;
    }
  }
  
  const stack = new Stack<string>();
  stack.push("A");
  stack.push("B");
  
  stack.size(); // Output: 2
  stack.peek(); // Output: "B"
  stack.size(); // Output: 2
  stack.pop();  // Output: "B"
  stack.size(); // Output: 1
//   while(true){
//     console.log("1 for push \n 2 for pop \n 3 for peek \n 4 for size \n ")
//     let choice:Number= parseInt(prompt("Enter your choice") )
//     switch(choice){
//         case 1:
//             let Input:any= prompt("Enter value you want to add") 
//             stack.push(Input)
//             console.log("Value pushed successfully")
//         case 2:
//             stack.pop()
//             console.log("Value poped successfully")
//         case 3:            
//             console.log("Peek Value",stack.peek())
//         case 3:            
//         console.log("Peek Value",stack.peek())
//         case 4:            
//         console.log("size of Stack",stack.size())
//         default:
//             console.log("choose right choice")
//     }
//   }