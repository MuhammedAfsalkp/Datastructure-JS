class Node{
    constructor(val){
        this.value=val;
        this.next=null;
    }
}

class LinkedList {
    constructor(){
        this.head=null;
        this.tail=null;

    }

    push(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail= newNode;

        }else{
        this.tail.next=newNode;
        this.tail = newNode
        }
    }


    pop(){
        if(!this.head){ return null;}
        if(this.tail==this.head){
            let retvalue=this.head.value;
            this.head=null;
            this.value=null;
            return retvalue;
        }
        let newtail=this.head;
        let del = newtail.next;
        while(del != this.tail){
            newtail=newtail.next;
            del=newtail.next;
        }
        let retvalue=del.value;
        this.tail=newtail;
        this.tail.next=null;
        return retvalue;
        
    }


    print(){
        let temp=this.head;
        while(temp){
            console.log(temp.value);
            temp=temp.next;
        }

    }



   //remove the head
    shift(){
        if(!this.head) { return null;}
        if(this.head == this.tail){
            let retValue = this.head.value;
            this.head=null;
            this.tail=null;
            return retValue;
        }
        
        let retvalue=this.head.value;
        this.head= this.head.next;
        return retvalue;

        
    }
   //add element at the begining
    unshift(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
            return;
        }
        if(this.head == this.tail){
            this.head=newNode;
            this.head.next=this.tail;
            return;
        }
        newNode.next=this.head;
        this.head=newNode;
        

    }


    reverse(){
        let temp=this.head;
        this.head=this.tail;
        this.tail=temp;
        let prev=null;
        let cur;
        while(temp){
            cur=temp.next;
            temp.next=prev;
            prev=temp;
            temp=cur;
            
        }

    }
}


const LL = new LinkedList();
// LL.unshift(10);
// LL.unshift(100)
LL.push(1);
// LL.push(2);
// LL.push(3);
// LL.push(4);
// LL.push(5);

console.log("elements in the list are");
LL.print();

// LL.unshift(6);
// LL.unshift(6+1);
console.log("after reversing");
LL.reverse()
LL.print();


console.log("shifting",LL.shift())
LL.print();

// console.log("poping",LL.pop())
// LL.print();
// console.log("poping",LL.pop())
// LL.print();
// console.log("poping",LL.pop())
// LL.print();
// console.log("poping",LL.pop())
// LL.print();
// console.log("poping",LL.pop())
// LL.print();



