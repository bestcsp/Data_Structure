// 724. Find Pivot Index
var peakIndexInMountainArray = function (arr) {
  let start = 0,
    end = arr.length;
  let mid = Math.floor((start + end) / 2);
  while (start <= end) {
    if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }

    mid = Math.floor((start + end) / 2);
  }
  console.log("-->", start, end, mid);
  return start;
};
let arr = [9, 1, 5, 7];
let peakValue = peakIndexInMountainArray(arr);
console.log("-->", peakValue);
