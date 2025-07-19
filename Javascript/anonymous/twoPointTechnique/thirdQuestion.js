// You are given an array height where each element represents the height of a vertical line on the x-axis.
// You need to find two lines that together with the x-axis form a container that holds the most water.

// Return the maximum area of water the container can store.
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Choose lines at indices 1 (height[1]=8) and 8 (height[8]=7):

// Distance = 8 - 1 = 7

// Height = min(8,7) = 7

// Area = 7 * 7 = 49

function getAns(height) {
  let left = 0,
    right = height.length - 1;
  max = 0;
  while (left < right) {
    let distance = right - left;
    let minHeight = Math.min(height[left], height[right]);
    let area = distance * minHeight;
    if (max < area) max = area;
    if (height[left] > height[right]) right--;
    else left++;
  }
  return max;
}

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let ans = getAns(height);
console.log(ans);
