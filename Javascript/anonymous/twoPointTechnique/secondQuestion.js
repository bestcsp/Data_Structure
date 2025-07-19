// 🔹 Given a sorted array of integers, return an array of the squares of each number,
//  also sorted in non-decreasing order, using O(n) time.
// Input: [-4, -1, 0, 3, 10]
// Output: [0, 1, 9, 16, 100]
let arr = [-4, -1, 0, 3, 10]
 let left = 0,right=arr.length-1,position=right,newArray=Array(right);
while(left<=right){
    let leftValueSquare = arr[left]*arr[left];
    let rightValueSquare = arr[right]*arr[right];
    if(leftValueSquare>rightValueSquare) newArray[position]=leftValueSquare,left++
    else newArray[position]=rightValueSquare,right--
    position--
}
console.log(newArray)