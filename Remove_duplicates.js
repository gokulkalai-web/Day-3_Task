//Remove duplicates from an array

//anonymous
const sixth_program = function(a,b) { 
    for(let val of a){ 
       if(!b.includes(val)){
         b.push(val);
       }
    }
    console.log(b.join("\n"))
};
sixth_program(["peter","peter","peter","tom"],[]);

//IIFE
(function(a,b) { 
    for(let val of a){ 
       if(!b.includes(val)){
         b.push(val);
       }
    }
    console.log(b.join("\n"))
})(["peter","peter","peter","tom"],[]);

//try to implememt in one line code
const sixth_program1 = function(a,b) {  for(let val of a) if(!b.includes(val)) b.push(val); console.log(b.join("\n"))
};
sixth_program1s(["peter","peter","peter","tom"],[]);