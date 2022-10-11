var romanToInt = function(s) {
    const roman = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000     
    }
    let total = 0
   for(let i = 0; i< s.length; i++){
        let curr = roman[s[i]]
        let next = roman[s[i+1]]
        if(curr < next){
            console.log(i);
            total += next - curr
            i++
            console.log(i);
        }else{
            total += curr
        }
    }
    // return total

};

module.exports = romanToInt