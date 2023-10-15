//Convert all the strings to title caps in a string array
// Anonymous
const second_program = function (a){ 
    for(let value of a){ 
      console.log(value.charAt(0).toUpperCase() 
      + value.slice(1,value.length));
    } 
}
second_program(["john","peter","tom"],[]);

//IIFE
(function(a){
    for(let value of a){ 
        console.log(value.charAt(0).toUpperCase() 
        + value.slice(1,value.length));
    }
})(["john","peter","tom"],[]);



//arrow function
const second_program_1 = (a) => { 
    for(let value of a){ 
        console.log(value.charAt(0).toUpperCase() 
        + value.slice(1,value.length));
    } 
}
second_program_1(["john","peter","tom"]);

//try to implement in one line code
const second_program_2 = (a) => {  for(let value of a){ console.log(value.charAt(0).toUpperCase() 
    + value.slice(1,value.length));} 
}
second_program_2(["john","peter","tom"]);