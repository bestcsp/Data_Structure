class Node:
    def __init__(self,data=None,next=None):
        self.data=data
        self.next=next

class LinkedList:
    def __init__(self):       
        self.head=None
    def insert_at_begining(self,data):
        node=Node(data,self.head)
        self.head=node
    def print(self):
        if self.head is None:
            print("linked lsit is empty")
            return
        itr=self.head
        llstr=''
        while itr:
            llstr += str(itr.data)+"--->"
            itr=itr.next
        print(llstr)
        
    def insert_at_end(self,data):
        if self.head==None:
            self.head=Node(data,None)
            return
        itr=self.head
        while itr.next:
            itr=itr.next
        itr.next=Node(data,None)
        
    def insert_values(self,data_list):
        #self.head=None
        for data in data_list:
            self.insert_at_end(data)
            
    def get_length(self):
        
        itr = self.head
        count=0
        while itr:            
            count =count+ 1
            itr.next
        return count
    
    def remove_at(self,index):
        if index<0 and index > self.get_length():
            print("index is not available try again")
        if index==0:
            self.head=self.head.next
            return
        itr=self.head
        count=0
        while itr:
            if count ==index-1:
                itr.next=itr.next.next
                break
            itr.next
            count+=1


if __name__=='__main__':
    l=LinkedList()
    l.insert_at_begining(5)
    l.insert_at_begining(8)
    l.print()
    l.insert_at_end(56)    
    l.print()
    l.insert_values(["banana","apple","orange"])
    l.print()
    print("length is ",l.get_length())
    l.remove_at(2)
    l.print()

    
        
