class node:
    def __init__(self,val):
        self.leftchild=None
        self.rightchild=None
        self.nodedata=val

root=node(1)
root.leftchild=node(2)

root.rightchild=node(3)
root.leftchild.leftchild=node(4)
root.leftchild.rightchild=node(5)
def InOrd(root):
    if root:
        InOrd(root.leftchild)
        print(root.nodedata)
        InOrd(root.rightchild)
print("Inorder traversal")
InOrd(root)
print("Preorder traversal")

def proder(root):# data and left child then right child 
    if root:        
        print(root.nodedata)
        proder(root.leftchild)
        proder(root.rightchild)
proder(root)
print("PostOrder traversal")

def PostOrder(root):   #left child then right child and then data
    if root:        
        PostOrder(root.leftchild)
        PostOrder(root.rightchild)
        print(root.nodedata)
PostOrder(root)



        
