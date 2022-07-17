function swap(array, i, high) {
  const temp = array[i + 1];
  array[i + 1] = array[high];
  array[high] = temp;
}

const partionFunc = (array, low, high) => {
  const pivotVariable = array[high]; //based on which data will be sorted
  let i = low - 1;
  for (let index = low; index <= high; index++) {
    if (array[index] < pivotVariable) {
      i++;
      [array[i], array[index]] = [array[index], array[i]];
    }
  }
  swap(array,i, high);

  return i+=1;
};

const quickSort = (array, low, high) => {
  console.log("-->", array, low, high);
  if (low < high) {
    const partion = partionFunc(array, low, high);
    console.log("-->", array, low, high, partion);

    quickSort(array, low, partion-1)  //leftarray
    quickSort(array, partion+1, high) //rightarray
  }
};

const unsortedArray = [5, 4, 3, 9, 7];
const sortedArray = quickSort(unsortedArray, 0, unsortedArray.length - 1);
console.log("--->Sorted Array", sortedArray, unsortedArray);
