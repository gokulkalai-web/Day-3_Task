//Rotate an array by k times

//anonymous 
const seveth_function = function(a,b,k,j){
    for(let i = 0;i<a.length;i++){
        if (i > a.length-1- k){
              b.splice(j,0,a[i]);
              j++;
        }
        else b.push(a[i]);
    }
    console.log(b.join("\n"));
};
seveth_function([4, 5, 6, 3, 1],[],2,0);

//IIFE
(function(a,b,k,j){
    for(let i = 0;i<a.length;i++){
        if (i > a.length-1- k){
              b.splice(j,0,a[i]);
              j++;
        }
        else b.push(a[i]);
    }
    console.log(b.join("\n"));
})([4, 5, 6, 3, 1],[],2,0);