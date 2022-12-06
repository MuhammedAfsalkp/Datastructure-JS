//index of  first non repeating character
// var str="ssssaatiisticcs"
// let obj={}
// for(let i=0; i<str.length; i++){
//     obj[str[i]]=(obj[str[i]])?obj[str[i]]+1:1;

// }
// let found=false;
// let unique;
// for(let key in obj){
//     if(obj[key]==1){
//         found=true;
//         unique=key;
//         break;
        

//     }
// }
// console.log(obj,unique,found)
// if(found){
//     console.log("index of",unique,str.indexOf('a')+1)

// }else{
//     console.log(-1);
// }


//shift card
// const color=["black","grey","brown","red","pink"];
// const targrtColor="black"
// let startIndex=3;

// let right=0;
// let rf=false;
// let left=0;
// let lf=false;
// let it=startIndex-1;
// while(!rf){
//     if(color[it]==targrtColor){

//         break;
//     }
//     if(it!=color.length-1){
//         right++;
//         it++;
//     }else{
//        it=0;
//        right++;
//     }
    
// }
// console.log("right",right);
// it=startIndex-1;
// while(!lf){
//     if(color[it]==targrtColor){

//         break;
//     }
//     if(it!=0){
//         left++;
//         it--;
//     }else{
//        it=color.length-1;
//        left++;
//     }
    
// }

// console.log("left",left);


// const min = arr => arr.reduce((x, y) => Math.min(x, y));
// const max = arr => arr.reduce((x, y) => Math.max(x, y));
 
// var arr = [ 6, 3, 5, 2, 9 ];
 
// console.log("Min:", min(arr));
// console.log("Max:", max(arr));

// let ar=[7,5,6,44,5,7];
// console.log(ar.sort(function(a,b){return b-a;}));
// console.log(ar)
// let mi =arr.reduce((x,y)=> Math.min(x,y));
// console.log(mi);

// const p=[8,10]
// const t=[3,1,8,7,4,2,5,2]

// let pp=  JSON.parse(JSON.stringify(p));
// let pt=  JSON.parse(JSON.stringify(t));
// pp.sort(function(a,b){return a-b});
// pt.sort(function(a,b){return b-a});
// console.log(pp,pt)

// let min=p[0];
// for(let i=0; i<pp.length; i++){
//     for(j=i*4; j<(i+1)*4; j++){
//         let temp =pp[i]+pt[j];
//         if(temp>min){ min=temp}
//         if (j==0) continue;
//         if(j%4 ==0 )break;
//     }


// }
// console.log(min,"minimu");

const bin=1000;
const decimal=20;
console.log(parseInt(bin,2));
console.log(decimal.toString(2));
console.log(bin,decimal);//old values
