// 724. Find Pivot Index
let wait = (time) => {
  setTimeout(() => {
    return;
  }, time);
};
var pivotIndex = function (nums) {
  let start = 0;
  let end = nums.length ;
  mid = start + Math.floor((end - start) / 2); //3 index
  let ans = -1,
    check = 0;
    console.log("-->1100", start, end,  check,!(mid < 0 || mid > end) && check < 2);

  while (!(mid < 0) && !(mid > end-1) && check < 1) {
    let sum1 = nums.slice(start, mid).reduce((sum, data) => {
      return (sum += data);
    }, 0);
    let sum2 = nums.slice(mid + 1, end).reduce((sum, data) => {
      return (sum += data);
    }, 0);    console.log("-->start", start,"end", end,"s1", sum1,"s2", sum2,"mid-->" ,mid,nums,check);


    if (sum1 === sum2) {
      ans = mid;
      mid=-1
      start = -1;
    } else if (sum1 < sum2) {
      mid += 1;
    } else {
      mid -= 1;
    }
    if (start == mid){ sum1 = 0, check += 1;}
    else if (end == mid+1){ sum2 = 0; check += 1}

    console.log("endof line-->start", start,"end", end,"s1", sum1,"s2", sum2,"mid-->" ,mid,nums);  }
  return ans;
};
// let arr = [1, 7, 3, 6, 5, 6];
// let arr = [2, 1, -1]; //[1,2,3]
// let arr =[1,7,3,6,5,6]
let arr=[1,2,3]

let ans = pivotIndex(arr);
console.log("pivot index ans->", ans);

// s=0,e=2,mid=1
// s1=1,s2=5,mid=2
// [1,2,3]