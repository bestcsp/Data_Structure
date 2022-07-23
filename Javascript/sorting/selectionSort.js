const selectionSort = (unsortedData) => {
  for (let i = 0; i <= unsortedData.length - 1; i++) {
    let min_index = i;
    for (let j = i + 1; j < unsortedData.length; j++) {
      if (unsortedData[i] > unsortedData[j]) {
        min_index = j;
      }
    }
    [unsortedData[i], unsortedData[min_index]] = [
      unsortedData[min_index],
      unsortedData[i],
    ];
  }
  return unsortedData;
};

const unsortedData = [54, 46, 40, 39, 20, 99];
const sortedArray = selectionSort(unsortedData);
console.log("array after selection sort", sortedArray);
