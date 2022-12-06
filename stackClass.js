class Node{
    constructor(val){
        this.value=val;
        this.next=null;

    }
}

class Stack {
    constructor(){
        this.first=null;
        this.last=null;
    }

    push(val){
        const newNode = new Node(val);
        if(!this.first){
            this.first=newNode;
            this.last=newNode;
        }
        else{
            const temp=this.first;
            this.first=newNode;
            this.first.next = temp;

        }
    }


    pop(){
        if(!this.first){
            console.log("Stack underflow");
            return null;

        }
        if(this.first == this.last){ const val = this.first.val; this.first=null; this.last=null; return val; }
        const retVal= this.first.value;
        const temp=this.first;
        this.first=this.first.next;
        return retVal;
    }
    print(){
        let temp=this.first;
        while(temp){
            console.log(temp.value);
            temp=temp.next;
        }
    }
}

const st = new Stack();
st.push(1);
st.push(2);
st.push(3);
st.push(4);

st.print()

console.log(st.pop())
console.log(st.pop())
console.log(st.pop())
console.log(st.pop())
console.log(st.pop())