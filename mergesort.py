def msort(mylist,left,right):
    #[5 9 57 51 65 34 1],0,7
    
    if right-left>1:
        middle=(left+right)//2 #3 1
        msort(mylist,left,middle)#[1, 5, 9, 34, 51, 57, 65],0,3
                                                          
        msort(mylist,middle,right)
        mlist(mylist,left,middle,right)
def mlist(mylist,left,middle,right):
    leftlist=mylist[left:middle]
    rightlist=mylist[middle:right]
    k=left
    i=0
    j=0
    while(left+i<middle and middle +j<right):
        if(leftlist[i]<=rightlist[j]):
            mylist[k]=leftlist[i]
            i=i+1
        else:
            mylist[k]=rightlist[j]
            j=j+1
        k=k+1
    if left+i<middle:
        while k < right:
            mylist[k]=leftlist[i]
            i=i+1
            k=k+1
    else:
        while k < right:
            mylist[k]=rightlist[j]
            j=+1
            k=k+1


mylist=input('Enter the list values to be sorted:').split()
mylist=[int(x) for x in mylist]
#[5 9 57 51 65 34 1]
msort(mylist,0,len(mylist))
print("The sorted list is :")
print(mylist)
#[1, 5, 9, 34, 51, 57, 65]


            
                
