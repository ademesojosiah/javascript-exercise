// class Node{
//     constructor(val){
//         this.val = val
//         this.next = null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null
//     }


//     append(val){
//         if(this.head === null){
//             this.head = new Node(val)
//         }else{
//             let curr = this.head
//             while(curr.next !== null){
//                 curr = curr.next
//             }
//             curr.next = new Node(val)
//         }

//     }

//     print(){
//         let curr = this.head
//         let str = ''
//         while(curr !== null){
//             str += `${curr.val} ->`
//             curr = curr.next
//         }
//         console.log(str);
//     }


//     contains(val){
//         let curr = this.head
//         while(curr !== null){
//             if(curr.val === val){
//                 return true
//             }
//             curr = curr.next
//         }
//         return false
//     }


// }


// let list = new LinkedList()

// list.append('a')
// list.append('b')
// list.append(8)
// list.append(9)
// list.append('j5')
// console.log(list.head);
// console.log(list.contains('j5'));

// list.print()

class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }


    append(val){
        if(this.head === null){
            this.head = new Node(val)
            return
        }
        this._append(val,this.head)
    }

    _append(val,curr){
        if(curr.next === null){
            curr.next = new Node(val)
            return
        }

        this._append(val,curr.next)
    }

    print(){
        const body = this._print(this.head)
        console.log(body);
    }

    _print(curr){
        if(curr === null){
            return ''
        }
        return (curr.val  + '->' + this._print(curr.next))
    }

    contain(val){
        const body = this._contain(val,this.head)
        console.log(body);

    }

    _contain(val,curr){
        if(curr === null) return false
        if(curr.val === val) return true
        return this._contain(val,curr.next) 
    }


}

const list = new LinkedList()



list.append('a')
list.append('b')
list.append('c')
list.append('d')

// function sumList(head){
//     let sum = 0
//     let curr = head
//     while(curr !== null ){
//         sum += curr.val
//         curr = curr.next
//     }
//     return sum  
// }


// const sumList = (curr)=>{
//     if(curr === null) return 0;
//     return curr.val + sumList(curr.next)
// }
// console.log(sumList(list.head))

// const deleteNode = (head,target)=>{
//     let prev = null;
//     let curr = head;
//     while(curr != null){
//         if(curr.val === target){
//             prev.next = curr.next
//             return head
//         }
//         prev = curr
//         curr = curr.next
//     }
//     return head
// }

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')

a.next = b
b.next = c
c.next = d


console.log(a)

const print = (head)=>{
    if(head === null) return ''
    console.log(head.val);
    return print(head.next)
}


// recursively
// const deleteNode = (head,target) =>{
//     let prev = null
//     let curr = head
//     function _deleteNode(curr,prev,target){
//         if(curr === null)return 
//         if(curr.val === target){
//             curr = curr.next
//             return curr
//         }
//         if(curr.val === target){
//         prev.next = curr.next
//         return curr
//         }
//            prev = curr
//             curr = curr.next
//         return _deleteNode(curr,prev,target)} 
//         return _deleteNode(curr,prev,target)
// }

// const newHead = deleteNode(a,'n')
// const newHead1 = deleteNode(a,'a')


// console.log(newHead,newHead1);
//  print(newHead1)

//
function reverseLinked(a){
    const memory = {}

    while( curr !== null){
        curr = curr.next
    }

}





