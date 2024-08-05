// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
const addArray=(arr)=>{
    return arr.reduce((value,sum)=>{
        return sum+=value
    },0)
}

var sumOddLengthSubarrays = function(arr) {
    let n= arr.length;
    let sum=0;
    if(n%2!==0) strt=1
    for(let i=strt;i<=n;i+=2){
        for(let j=0;j<=n-i;j++){    
            let sumOfArray=  addArray(arr.slice(j,i+j))      
            sum+=sumOfArray
        }
    }
    return  sum;
};


let arr=[1,4,2,5,3]//58
let output = sumOddLengthSubarrays(arr)
console.log("-->output",output,arr)
arr=[1,2]
output = sumOddLengthSubarrays(arr)
console.log("-->output",output,arr)
