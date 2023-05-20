// get pivot point

const getPivot=(arr,length)=>{
    let s=0;
    let e=length-1;
    let mid=s+Math.floor((e-s)/2)
    while(s<e){
        if(arr[mid]>=arr[0]){
            s=mid+1
        }
        else{
            e=mid-1
        }
        mid=s+Math.floor((e-s)/2)        
    }
    return s;
}

const arr= [7,9,1,2,3] //
const ans = getPivot(arr,arr.length)
console.log("-->ans",ans)