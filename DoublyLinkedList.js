class Node{
    constructor(val){
       this.value=val;
       this.next=null;
       this.prev=null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        
    }

    push(val){
        const newNode=new Node(val);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
            return;
        }
        this.tail.next=newNode;
        newNode.prev=this.tail;
        this.tail=newNode;

    }

    pop(){
        if(!this.head){
            return null;   
        }
        let retValue;
        if(this.head == this.tail){
            retValue=this.head.value;
            this.head=null;
            this.tail=null;
            return retValue;

        }
        retValue=this.tail.value;
        this.tail=this.tail.prev;
        this.tail.next=null;
        return retValue;

    }


    print(){
        let temp=this.head;
        while(temp){
            console.log(temp.value);
            temp=temp.next;
        }
    }


    shift(){
        if(!this.head){
            return null;
        }
        let retValue;
        if(this.head == this.tail){
            retValue=this.head.value;
            this.head=null;
            this.tail=null;
            return retValue;

        }
        retValue=this.head.value;
        this.head=this.head.next;
        this.head.prev=null;
        return retValue;
        

    }


    unshift(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
            return;
        }
        newNode.prev=null;
        newNode.next=this.head;
        this.head=newNode;
        
        

    }
}

const DD = new DoublyLinkedList();
DD.unshift(500);
DD.push(1);
DD.unshift(100000);
DD.push(2);
DD.push(3);
DD.push(4);

DD.print();

// console.log("poping",DD.shift());
DD.unshift(10);
DD.unshift(100)
DD.print();
// console.log("poping",DD.shift());
// DD.print();
// console.log("poping",DD.shift());
// DD.print();
// console.log("poping",DD.shift());
// DD.print();
// console.log("poping",DD.shift());
// DD.print();
// console.log("poping",DD.shift());
// DD.print();
// console.log("poping",DD.pop());
// DD.print();
// console.log("poping",DD.pop());
// DD.print();
// console.log("poping",DD.pop());
// DD.print();
