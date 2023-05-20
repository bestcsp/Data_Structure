
// https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/
var differenceOfSum = function(nums) {
    let esum=0,singleSum=0,doubleDigit=[]
    for (let digit of nums){
        esum+=digit;
        if(digit<10)singleSum+=digit
        else{
            digit.toString().split("").map((number)=>{
                singleSum+=parseInt(number)
            })
        }
    }
    return esum-singleSum
    
};