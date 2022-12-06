let Q=[];

const endQ= (val) => {
    Q.push(val);

}

const dQ = (val)=>{
    if (Q.length == 0){
        console.log("underflow")
    }
return Q.shift()
}

endQ(1);
endQ(2);
endQ(3);

console.log(Q);

console.log(dQ())
console.log(dQ());
console.log(dQ());

