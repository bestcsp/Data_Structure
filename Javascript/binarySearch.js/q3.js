// 724. Find Pivot Index
let wait = (time) => {
  setTimeout(() => {
    return;
  }, time);
};
var pivotIndex = function (nums) {
  let start = 0;
  let end = nums.length ;
  mid = start + Math.floor((end - start) / 2); 
  let ans = -1,
    check = -1;
    let sum1 = nums.slice(start, mid).reduce((sum, data) => {
      return (sum += data);
    }, 0);
    let sum2 = nums.slice(mid + 1, end).reduce((sum, data) => {
      return (sum += data);
    }, 0); 
    const allTotal = nums.reduce((sum, data) => {
      return (sum += data);
    }, 0); //start + Math.floor((end - start) / 2)>check
  while (Math.floor(allTotal/2)>check) {
    console.log("-->",check,sum1,sum2,mid,arr)
    if (sum1 === sum2) {
      ans = mid;
      return ans
    } else if (Math.abs(sum1) < Math.abs(sum2)) { 
      mid += 1;
      sum1+=nums[mid-1]
      sum2 =allTotal-sum1-nums[mid]
    } else { 
      sum1-=nums[mid-1]
      mid -= 1; 
      sum2 =allTotal-sum1-nums[mid]
    }
    check+=1
  };
  return ans;
}
// let arr = [1, 7, 3, 6, 5, 6];
// let arr = [2, 1, -1]; //right ans
// let arr =[1,7,3,6,5,6] right ans
// let arr=[1,2,3] right ans
let arr = [-1,-1,-1,-1,-1,0]

let ans = pivotIndex(arr);
console.log("pivot index ans->", ans);

// s=0,e=2,mid=1
// s1=1,s2=5,mid=2
// [1,2,3]