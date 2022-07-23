const bubbleSort=(unsortedData)=>{
for(let index=0;index<=unsortedData.length;index++){
    for(let intenalLoop=0;intenalLoop<=unsortedData.length-index-1;intenalLoop++){
        if(unsortedData[intenalLoop]>unsortedData[intenalLoop+1]){ //for ascending order
            const temp=unsortedData[intenalLoop]
            unsortedData[intenalLoop]=unsortedData[intenalLoop+1]
            unsortedData[intenalLoop+1]=temp
        }
    }
}
return unsortedData
}

const unsortedData=[0,5.7,9,100,1000,-1]//[5,1,4,2,8] //Example
const sortedArray = bubbleSort(unsortedData)
console.log("--->sorted Array",unsortedData)