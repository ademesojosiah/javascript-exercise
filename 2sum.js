Const field = new Array(2,4,6,8,9,7)
Const memory = {}

function twoSum(array, target){
   for(let i = 0; i<= array.length ; i++){
      let other = target - array[i]
      if(other in memory){
           Return(memory.other, i )
} else {
      memory.array[i]  = i 
 }
}
  
}

Console.log(twoSum(field , 17))
