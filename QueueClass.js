class Node{

    constructor(val){
        this.value=val;
        this.next=null;
    }

}


class Q{
    constructor(){
        this.first=null;
        this.last=null;
    }


    endQ(val){
        const newNode = new Node(val);
        if(!this.first){
            this.first= newNode;
            this.last=newNode
        }else{
            this.last.next=newNode;
            this.last=newNode;
        }

    }

    dQ(){
        if(!this.first){  return null}
        if(this.first == this.last){ const val = this.last.value; this.first=null; this.last=null; return val; }
        const val= this.first.value;
        this.first=this.first.next;
        return val;


    }

    print(){
        let temp=this.first;
        while(temp){
            console.log(temp.value);
            temp=temp.next;
        }

    }
    
}

const q=new Q();
q.endQ(1);
q.endQ(2);
q.endQ(3);

q.print();

console.log(q.dQ());
console.log(q.dQ());
console.log(q.dQ());
console.log(q.dQ());
