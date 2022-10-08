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
        }else{
            let curr = this.head
            while(curr.next !== null){
                curr = curr.next
            }
            curr.next = new Node(val)
        }

    }

    print(){
        let curr = this.head
        let str = ''
        while(curr !== null){
            str += `${curr.val} ->`
            curr = curr.next
        }
        console.log(str);
    }


    contains(val){
        let curr = this.head
        while(curr !== null){
            if(curr.val === val){
                return true
            }
            curr = curr.next
        }
        return false
    }


}


// let list = new LinkedList()

// list.append('a')
// list.append('b')
// list.append(8)
// list.append(9)
// list.append('j5')
// console.log(list.head);
// console.log(list.contains('j5'));

// list.print()



function recurse_bin(list,target){
    if(list.length === 0){
        return false
    }
    let midpoint = Math.floor((list.length)/2)
    if(list[midpoint] === target){
        return true
    }else if(target > list[midpoint]){
        return recurse_bin(list.slice((midpoint+1)),target)
    }else{
        return recurse_bin(list.slice(0,(midpoint-1)),target)
    }
}


let list = [0,1,2,3,4,5,6,7,8,9,10]
console.log(recurse_bin(list,7))
