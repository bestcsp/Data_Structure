def isort(a):
    for x in range(1,len(a)):
        k=a[x]
        j=x-1
        while j>=0 and k> a[j]:
            a[j+1]=a[j]
            print("a",a)
            j-=1
        a[j+1]=k
        print("outside",a[j+1])
a=[24,56,1,50,17]
print(a)
isort(a)
print(a)
