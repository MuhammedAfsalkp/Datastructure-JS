class Node{
    constructor(val){
        this.value=val;
        this.right=null;
        this.left=null;
    }
}


class BST{
    constructor(){
        this.root=null;
    }


    insert(val){
        const newNode = new Node(val);
        if(!this.root){
            this.root=newNode;
            return;
        }
        let cur=this.root;
        while(true){
            if(val==cur.val) return undefined;
            if(val<cur.value){
                if(cur.right== null){
                    cur.right=newNode;
                    return;
                }
                cur=cur.right;

            }
            else{
                if(cur.left == null){
                    cur.left=newNode;
                    return;
                }
                cur=cur.left;
            }

        }
    }

    contains(val){
        let found=false;
        if(!this.root) { found=false; return found;}
        if(this.root.value == val){
            found=true;
            return found;
        }
        let cur=this.root;
        while(cur){
            if(cur.value==val){
                found=true;
               return found;
            }
            if(val<cur.value){
                cur=cur.right
            }else{
                cur=cur.left;
            }
        }
        return found;
    }
}


const bst =  new BST();
bst.insert(1);
console.log("check 1 = ",bst.contains(1));
bst.insert(2);
console.log("check 2 = ",bst.contains(2));
bst.insert(3);
console.log("check 3 = ",bst.contains(3));
bst.insert(4);
console.log("check 4 = ",bst.contains(4));
bst.insert(5);
console.log("check 5 = ",bst.contains(5));
bst.insert(6);
console.log("check 6 = ",bst.contains(6));
console.log("check 8 = ",bst.contains(8));
console.log("check 9 = ",bst.contains(9));