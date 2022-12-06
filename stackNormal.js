const stack=[];

const PUSH = (val)=>{
    // console.log("pushing",val)
    stack.push(val);

}

const POP = ()=>{
    // console.log("length = ",stack.length)
    if(stack.length == 0){

        console.log("stack underflow");
        return ;
    }
    return stack.pop()
    
}

PUSH(1);
PUSH(2);
PUSH(3);
PUSH(4);


console.log(stack);


console.log(POP())
console.log(POP())
console.log(POP())
console.log(POP())
console.log(POP())
console.log(POP())
