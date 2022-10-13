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


}

// const list = new LinkedList()

// list.append('a')
// list.append('b')
// list.append(8)
// list.append(9)
// list.append('j5')
// console.log(list.head);
// list.print()


function recursive_loop(list){
    if(list.length === 0){
        return console.log('empty array');
    }
    function doDO(list,curr){
        if(list[curr] === undefined) return '' //base case
        console.log(list[curr])
        curr += 1
        return doDO(list,curr)
    }
    let curr = 0
    doDO(list,curr);

}

const arr = [1,2,3,4,5,6,7,8,9,"j5",'jojo']
recursive_loop(arr)





