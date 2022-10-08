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


let list = new LinkedList()

list.append('a')
list.append('b')
list.append(8)
list.append(9)
list.append('j5')
console.log(list.head);
console.log(list.contains('j5'));

list.print()