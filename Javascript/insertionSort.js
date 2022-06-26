const insertionSort = (unsortedData) => {
    console.log("->",unsortedData)
  for (let i = 1; i < unsortedData.length; i++) {
      const firstIndexData=unsortedData[i]
      let j=i-1
      while(j>=0 && firstIndexData>unsortedData[j]){
          unsortedData[j+1]=unsortedData[j];
          j-=1
      }
      unsortedData[j+1]=firstIndexData;
    
  }
  return unsortedData;
};

const unsortedData = [4, 1, 0, 17, 9, 8, 5];
const sortedArray = insertionSort(unsortedData);
console.log("--->data after insertion sort", sortedArray);
