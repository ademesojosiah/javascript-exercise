function binary_search(list,target){
    let first = 0
    let last = (list.length -1)
    while(first < last){
        let midpoint = Math.round((first + last)/2)
        if(list[midpoint] === target){
            return true
        }else if(target > list[midpoint]){
            first = midpoint
        }else{
            last = midpoint
        }
    }
    return false
}



function recursive_binary(list,target){
    if(list.length === 0){
        return false
    }
    let midpoint = Math.round((list.length)/2)
    if(list[midpoint]=== target){
        return true
    }else if(target > list[midpoint]){
        return recursive_binary(list.slice((midpoint)),target)
    }else{
        console.log('hello');
        return recursive_binary(list.slice(0,(midpoint)),target)
    }
}

const list = [0,1,2,3,4,5,6,7,8,9,10]

const result = recursive_binary(list,70)
const result1 = binary_search(list,70)

function verify(result){
console.log('target found', result);
}

verify(result)
verify(result1)
