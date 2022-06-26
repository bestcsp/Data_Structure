// Creating a tree

class tree {
  constructor(element) {
    this.left = null;
    this.data = element;
    this.right = null;
  }
}

const root = new tree(5); //tree created (root)
root.left = new tree(4);
root.right = new tree(6);
root.left.left = new tree(3);
root.left.left.left = new tree(2);
root.right.right = new tree(8);
root.right.right.left = new tree(7);

//inorder traversal
const Inorder = (root) => { //left root then data and then right 
    if(root){
        Inorder(root.left);
        console.log(root.data);
        Inorder(root.right);
    }
}
console.log("---> In order traversal start")

Inorder(root)

const PostOrder=(root)=>{ //left child then right child and then data
    if(root){
        PostOrder(root.left)
        PostOrder(root.right)
        console.log(root.data)
    }
}
console.log("---> Post order traversal start")
PostOrder(root)

const PreOrder=(root)=>{ //data and left child then right child 
    if(root){
        console.log(root.data)
        PostOrder(root.left)
        PostOrder(root.right)
    }
}
console.log(" -----> Pre order traversal")
PreOrder(root)