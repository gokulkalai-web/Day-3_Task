//Sum of all numbers in an array

// Anonymous
let thrid_program = function (a,b) {
    for(let val of a){
        b+=val;
    }
    return b;
  }
console.log(thrid_program([10,20,30,40,50],0));
  
//IIFE

(function(a,b){
    for(let val of a){
        b+=val;
    }
    console.log(b);
})([10,20,30,40,50],0);


((a,b) => {
    for(let val of a){
        b+=val;
    }
    console.log(b);
})([10,20,30,40,50],0);

//arrow function
let thrid_program_1= (a,b) => {
    for(let val of a){
        b+=val;
    }
    return b;
  }
console.log(thrid_program_1([10,20,30,40,50],0));

//try to implement in one line code
let thrid_program1= (a,b) => {for(let val of a) b+=val; return b};
console.log(thrid_program1([10,20,30,40,50],0));