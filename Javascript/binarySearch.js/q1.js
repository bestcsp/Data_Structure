// find first and last occurence of an element in sorted array
function getFirstIndex(arr, n, k) {
  let start = 0,
    end = n - 1;
  let mid = Math.floor((start + end) / 2);
  let ans = -1;
  console.log("avaluens", start, end, mid);
  while (start <= end) {
    console.log("check", k < arr[mid], k > arr[mid], mid);

    if (arr[mid] === k) {
      ans = mid;
      end = mid - 1; // logic
      // return mid
    } else if (k < arr[mid]) {
      end = mid - 1;
    } else if (k > arr[mid]) {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  return ans;
}

function getLastIndex(arr, n, k) {
  let start = 0,
    end = n - 1;
  let mid = Math.floor((start + end) / 2);
  let ans = -1;
  console.log("avaluens", start, end, mid);
  while (start <= end) {
    console.log("check", k < arr[mid], k > arr[mid], mid);

    if (arr[mid] === k) {
      ans = mid;
      start = mid + 1; // logic
    } else if (k < arr[mid]) {
      end = mid - 1;
    } else if (k > arr[mid]) {
      start = mid + 1;
    }
    console.log("111ens", start, end, mid);
    mid = Math.floor((start + end) / 2);
  }
  return ans;
}
function firstAndLastPosition(arr, n, k) {
  return   {
    first: getFirstIndex(arr, n, k),
    last: getLastIndex(arr, n, k),
    contagiousCount:Math.floor((last-first)+1)
  };
}

// let ans= firstAndLastPosition([0, 5, 5, 6, 6, 6],6,3)
let ans = firstAndLastPosition([0, 5, 5, 6, 6, 6], 6, 6);

console.log("ans", ans);
