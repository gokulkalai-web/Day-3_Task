//Print odd numbers in an array

// Anonymous
const first_program = function(a) { 
    for(let value of a) 
       if(value%2 != 0) 
          console.log(value);
};
first_program([1,2,3,4,5,6,7,8,9,10]);

//IIFE
(function(a){
    for(let value of a){ 
      if(value%2 != 0){ 
         console.log(value)};
    }
})([1,2,3,4,5,6,7,8,9,10]);

//arrow function
const first_program_1 = (a) => { 
    for(let value of a) 
       if(value%2 != 0) 
          console.log(value);
};
first_program_1([1,2,3,4,5,6,7,8,9,10]);

//one line code
const first_program_2 = function(a) { for(let value of a) if(value%2 != 0) console.log(value);}
first_program_2([1,2,3,4,5,6,7,8,9,10]);