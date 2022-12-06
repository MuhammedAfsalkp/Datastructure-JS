//activity selection
//to sort array-Descending 
let ar=[7,5,6,44,5,7];
console.log(ar.sort(function(a,b){return b-a;}));
console.log("length",ar.length);


function printMaxActivities(start, finish, n){
    i=0;
    console.log(i);
    for(let j=1; j<n; j++){
        if(start[j]>=finish[i]){
            console.log(j);
            i=j;

        }

    }
}


let s = [1, 3, 0, 5, 8, 5]
//sort f-finish time
let f = [2, 4, 6, 7, 9, 9]
let n = s.length;
printMaxActivities(s, f, n);



