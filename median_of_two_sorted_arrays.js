
//median of two sorted arrays
//Anonymous

const fifth_problem = function(a1,a2,output) {
    for(let i = 0;i< a1.length;i++){
        output.push(a1[i]);
        if(i < a2.length){
            output.push(a2[i]);
        } 
    }
    let val = output.sort(function(a , b){return a - b});

    return Math.floor((val[Math.floor((val.length)/2)] + 
    val[Math.floor((val.length/2) - 1)])/2);
}
console.log(fifth_problem([1,12,15,26,38],[2,13,17,30,45],[]));


//IIFE

(function(a1,a2,output) {
    for(let i = 0;i< a1.length;i++){
        output.push(a1[i]);
        if(i < a2.length){
            output.push(a2[i]);
        } 
    }
    let val = output.sort(function(a , b){return a - b});
    console.log(val);
    console.log(Math.floor((val[Math.floor((val.length)/2)] + 
    val[Math.floor((val.length/2) - 1)])/2));
})([1,12,15,26,38],[2,13,17,30,45],[]);