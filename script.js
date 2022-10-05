const recursive_binary = require('./recursive_binary')
/// Get the sum of minimium and maximium values in an array


// solution 1

// let arr = [21,90,4,13,5]
// let max = arr.sort((a,b)=>{
//     return a-b;
// })
// max.pop()
// let maxsum = 0;
// for (let i =0; i<max.length;i++){
//     maxsum += max[i];
// }
// console.log(maxsum)

// let arr2 = [21,90,4,13,5]
// let min = arr2.sort((a,b)=>{
//     return b-a ;
// })
// min.pop()
// let minsum =0;
// for(let i =0 ; i<min.length;i++){
//     minsum += min[i];
// }
// console.log(minsum)


// solution 2
// let arr = [21,90,4,13,5]
// let max = arr[2];
// let min = arr[2];

// for(let ray of arr){
//     if(ray > max){
//         max = ray
//     }
//     if(ray < min){
//         min = ray

//     }
// }

// let maxsum = 0;
// let minsum = 0;

// for(let ray of arr){
//     if(ray < max){
//         minsum += ray
//     }
//     if(ray > min){
//         maxsum += ray
//     }
// }

// console.log(minsum);
// console.log(maxsum);


///  convert 12hours to 24 hours time

// let time = "12:00:00am";

// (function changeTime(time){
//     let newTime = "00"
//     if(time[0] === "1" && time[1]=== "2" && time[8] === "a"){
//             for(let i = 2; i < time.length-2 ; i++){
//                 newTime += time[i];
//             }
        
//     }
//     console.log(newTime) ;
// })(time);

// const nums =[2,7,11,15]
// const target =9


// const memory = {}
// let other;
// for(let i=0;i<=nums.length;i++){
//     other = target - nums[i]
//     if(memory[other] !== undefined){
//         return console.log([memory[other],i]);
        
//     }else{
//         memory[nums[i]]=i
//     }
// }


// function linear_search(list,target){

//     for(let i = 0;i<=list.length;i++){
//         if(list[i]=== target){
//             return i
//         }
//     }

//     return "none"
// }

// const index = linear_search(list,target)


// function binary_search(list,target){
//     let first = 0
//     let last = list.length -1
//     let midpoint ;
//         while(first < last){
//             midpoint = Math.floor((first + last) /2)
//             if(list[midpoint] === target){
//                 return midpoint
//             }else if(list[midpoint] < target){
//                 first = midpoint + 1
//             }else{
//                 last = midpoint - 1
//             }
//         }

//         return "none"
// }


// const index = binary_search(list,target)

// function verify(index){
//     if(index !== 'none'){
//         console.log('target found at index:',index);
//     }else{
//         console.log('target not found');
//     }
// }

// verify(index)

const list = [0,1,2,3,4,5,6,7,8,9,10]

const result = recursive_binary(list,8)

function verify(result){
console.log('target found', result);
}

verify(result)