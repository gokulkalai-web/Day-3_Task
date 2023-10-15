//Return all the palindromes in an array

// Anonymous
const seventh_program = function (a) {
    for(let val of a){
        let c = "";
        for(let j = val.length - 1;j>=0;j--){
            c+=val[j];
        }
        if (val == c){
          console.log(c);  
        }
    }
}
seventh_program(["mam","madam","yes","okay","are"]);

//IIFE
(function (a){
    for(let val of a){
        let c = "";
        for(let j = val.length - 1;j>=0;j--){
            c+=val[j];
        }
        if (val == c){
           console.log(c);  
        }
    }
})(["mam","madam","yes","okay","are"]);

//arrow function
const seventh_program_1 = (a) => {
    for(let val of a){
        let c = "";
        for(let j = val.length - 1;j>=0;j--){
            c+=val[j];
        }
        if (val == c){
          console.log(c);  
        }
    }
}
seventh_program_1(["mam","madam","yes","okay","are"]);
