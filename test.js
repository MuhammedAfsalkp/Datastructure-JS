//obj iteration
// let obj={a:1, b:2, c:'test'};
// for(let key in obj){
//     console.log(obj.key);
//     console.log(obj.a)
//     console.log(obj.d)

// }


//min,max
// var arr=[1,4,5,7,8];
// const min=(arr)=>{return arr.reduce((x,y)=>{return Math.min(x,y)})};
// console.log(min(arr))

// const max = arr => arr.reduce((x,y)=>Math.max(x,y));
// console.log(max(arr));


//array sorting
// let ar=[1,7.8,3,10];
// let ra=ar.sort((a,b)=>b-a);
// console.log(ra);
// console.log(ar.sort((a,b)=>a-b));


//mutability
//immutable -string - value-stack
// let a="abcd"
// let aa=a;
// console.log(a,aa);
// console.log(a==aa) //true
// a="afsal";
// console.log(a,aa) //a=afsal aa=abcd
// console.log(a==aa) //false

// //mutable-object,array  referrence-heap-stackpointer
// let obj={a:1}
// let cobj=obj;
// cobj.a=2;
// console.log(obj,cobj) //{ a: 2 } { a: 2 }
// let tobj={a:2}
// console.log(obj==cobj) //true
// console.log(obj==tobj)//false


// copy of array
// const p=[1,2,3,4]
// let cp= JSON.parse(JSON.stringify(p));
// console.log(p,cp)
// console.log(p==cp)//false



// //copy of obj
// let obj={a:'1',b:2};
// let cobj={...obj};
// console.log(obj,cobj); //{ a: '1', b: 2 } { a: '1', b: 2 }
// console.log(obj==cobj)//false



//bin=decimal
// const bin=1000;
// const decimal=20;
// console.log(parseInt(bin,2));
// console.log(decimal.toString(2));
// console.log(bin,decimal);//old values

//spread operator ...
// const myVehicle = {
//     brand: 'Ford',
//     model: 'Mustang',
//     color: 'red'
//   }
  
//   const updateMyVehicle = {
//     type: 'car',
//     year: 2021, 
//     color: 'yellow'
//   }
  
//   const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
  
//   //Check the result object in the console:
//   console.log(myUpdatedVehicle);


//   //string to array
//   let str="afsal";
//   let ar=[...str];
//   console.log(str,ar) //afsal [ 'a', 'f', 's', 'a', 'l' ]

// copy array
//   const newar=[...ar]
//   console.log(ar);  //[ 'a', 'f', 's', 'a', 'l' ]

// let str1="test";
// str2=str1;
// str1="change";
// console.log(str2,str1);

// let s=new String("test");
// let s2="test"
// console.log(s===s2,s==s2)
// s=new String("change");
// console.log(s,s2,(s===s2))


let str="hello";
function rev(st){
    if(st.length==0){
        return"";
    }
    return str.charAt(st.length-1)+rev(st.slice(0,st.length-1))
}
console.log(rev(str))
