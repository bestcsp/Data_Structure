var Stack = /** @class */ (function () {
    function Stack(capacity) {
        if (capacity === void 0) { capacity = Infinity; }
        this.capacity = capacity;
        this.storage = [];
    }
    Stack.prototype.push = function (item) {
        if (this.size() === this.capacity) {
            throw Error("Stack has reached max capacity, you cannot add more items");
        }
        this.storage.push(item);
    };
    Stack.prototype.pop = function () {
        return this.storage.pop();
    };
    Stack.prototype.peek = function () {
        return this.storage[this.size() - 1];
    };
    Stack.prototype.size = function () {
        return this.storage.length;
    };
    return Stack;
}());
var stack = new Stack();
console.log("jdkladfkla")
stack.push("A");
stack.push("B");
stack.size(); // Output: 2
stack.peek(); // Output: "B"
stack.size(); // Output: 2
stack.pop(); // Output: "B"
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
