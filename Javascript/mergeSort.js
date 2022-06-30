const mergeSort = (array, leftIndex, rightIndex) => {
  if (array.length > 1) {
    const medium = Math.floor(array.length / 2);
    const leftArray = array.slice(0, medium);
    const rightArray = array.slice(medium, array.length);
    mergeSort(leftArray, 0, medium);
    mergeSort(rightArray, medium, array.length);

    let i = 0,
      j = 0,
      k = 0;
    //copying data from sub array to main array
    while (i < leftArray.length && j < rightArray.length) {
      if (leftArray[i] < rightArray[j]) {
        array[k] = leftArray[i];
        i++;
      } else {
        array[k] = rightArray[j];
        j++;
      }
      k++;
    }

    //checking if any data left
    while (i < leftArray.length) {
      array[k] = leftArray[i];
      i++;
      k++;
    }
    //checking if any data left in rightArray
    while (j < rightArray.length) {
      array[k] = leftArray[j];
      j++;
      k++;
    }
  }
};

const unsortedArray = [5, 4, 3];
const sortedArray = mergeSort(unsortedArray, 0, unsortedArray.length);
console.log("--->Sorted Array", sortedArray, unsortedArray);
