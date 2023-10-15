//Return all the prime numbers in an array

// Anonymous
let fourth_program = function (a) { 
    for(let value of a){
     let val = 0;
     for(let j = 1;j<=value;j++){ 
        if(value%j == 0) {
           val++;
        }
     }
     if (val == 2){
        console.log(+value);  
     }  
  }
}
fourth_program([55,44,3,10,2,4,7,9,19,13]);

//IIFE
((a) => { 
    for(let value of a){
     let val = 0;
     for(let j = 1;j<=value;j++){ 
        if(value%j == 0) {
           val++;
        }
     }
     if (val == 2){
        console.log(+value);  
     }  
  }
})([55,44,3,10,2,4,7,9,19,13]);


//arrow function
let fourth_program_1 = (a) => { 
    for(let value of a){
     let val = 0;
     for(let j = 1;j<=value;j++){ 
        if(value%j == 0) {
           val++;
        }
     }
     if (val == 2){
        console.log(+value);  
     }  
  }
}
fourth_program_1([55,44,3,10,2,4,7,9,19,13]);
  
