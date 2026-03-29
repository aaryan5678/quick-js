// Function are very imortant in javascript they are called first class cizens 

// Functions are called first cast citizens 
//Higher-order functions:- A higher order function that takes one or more functions as arguments as arguments, or returns a function as it result 



// function add(a,b){
//     return a+b;
// }

// console.log(add);
// console.log(add(2,3))

// let sum = function (a,b){
//     return a+b;
// }

// let diff = function (a,b){
//     return a-b;
// }

// let mltply = function (a,b){
//     return a*b;
// }

// function operate(operateFunc, a,b){

// }



function sum(a,b){
    return a+b;
}

console.log(sum);
console.log(sum(2,3) );


let num= function(a,b){
return a+b;

}


console.log(num);
console.log(num(2,3));

function operate(operationFunc, a,b){
    return operationFunc(a,b);
}

console.log(operate(sum,2,3));