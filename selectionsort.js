let ar=[2,5,6,1,8];
let minIndex;
for(let i=0; i<ar.length; i++){
    minIndex=i;
    for(j=i+1; j<ar.length; j++){
        if(ar[j]<ar[minIndex]){
            minIndex=j;
        }
    }
    temp=ar[i];
    ar[i]=ar[minIndex];
    ar[minIndex]=temp;
    console.log("it ",i,ar)
}

console.log(ar)