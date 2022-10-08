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
        let str = ''
        let curr = this.head
        while(curr !== null){
            str += `${curr.val} ->`
            curr = curr.next
        }
        console.log(str);
    }



}


let list = new LinkedList()

list.append('a')
list.append('b')
list.append(8)
list.append(9)
list.append('j5')

list.print()