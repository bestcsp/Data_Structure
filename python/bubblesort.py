def bs(a):
    b=len(a)-1
    print("length",b)
    for x in range(b):
        print("x",x)        
        for y in range(b-x):
            print("y",y)
            if a[y]>a[y+1]:
                a[y],a[y+1]=a[y+1],a[y]
                print('a[y]',a[y],'a[y+1]',a[y+1])
            print(a)
    return a
a=[3,6,1,8]
bs(a)
