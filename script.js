
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

let time = "12:00:00am";

(function changeTime(time){
    let newTime = "00"
    if( time[0] === "1" && time[1]=== "2" && time[8] === "a"){
            for(let i = 2; i < time.length-2 ; i++){
                newTime += time[i];
            }
        
    }
    console.log(newTime) ;
})(time);
