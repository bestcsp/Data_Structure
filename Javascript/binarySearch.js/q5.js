// Search in rotated search array

function binarySearch(arr,n,k){
    let start=0,end=n-1
    let mid=start+Math.floor((end-start)/2)

    while(start<=end){
        if(arr[mid]==k){
            console.log("-->mid",mid)
            return mid
        }
        else if(arr[mid]<k){
            end=mid-1
        }
        else{
            start=mid+1
        }
        mid=start+Math.floor((end-start)/2)

    }
    return -1
}

function findPosition(arr, n, k){
    const pivot = binarySearch(arr,n,k)
    return pivot
}

console.log("--->",findPosition([2,3,5,8],4,3))
console.log("--->",findPosition([2 ,4, 5, 6, 8, 9, 1],7,2))


