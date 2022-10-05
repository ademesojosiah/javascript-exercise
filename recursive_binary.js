function recursive_binary(list,target){
    if(list.length === 0){
        return false
    }
    let midpoint = Math.floor((list.length)/2)
    if(list[midpoint]=== target){
        return true
    }else if(target > list[midpoint]){
        return recursive_binary(list.slice((midpoint+1)),target)
    }else{
        return recursive_binary(list.slice(0,(midpoint-1)),target)
    }
}

module.exports = recursive_binary