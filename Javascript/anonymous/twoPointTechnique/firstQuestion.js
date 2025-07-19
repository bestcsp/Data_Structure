// Given an array of integers, move all zeros to the end while maintaining the relative order of non-zero elements.
// Do this in-place with O(1) extra space.
// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]

let arr = [0, 1, 0, 3, 12];
let index = 0;
for (i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) (arr[index] = arr[i]), (index = index + 1);
}
for (i = index ; i < arr.length; i++) {
  arr[i] = 0;
}
console.log(arr);
