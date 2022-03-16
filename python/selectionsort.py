def ss(a):
    for i in range(len(a)):
        key=a[i]
        for j in range(i,len(a)):
            print("Key",key,"a[j]",a[j])

            if key>=a[j]:
                index=j
                print("index",index)
                value=a[j]
                print("value",value)

                key=value
                print(key)

        a[i],a[index]=value,a[i]
        print(a)
        
a=[1,6,0,99,52,34]
print(a)
ss(a)
print(a)
