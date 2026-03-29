// let sum = (a,b) => a+b;

// let diff = (a,b) => a-b;

// console.log(sum);
// console.log(diff);


// function outer(){
//     function inner(){
//         console.log('Gand marao bsdwalo bedagarg ho tumhara');
//     }
//     return inner;
// }

// let returnedFuncVar = outer();

// console.log(returnedFuncVar)


function outer (){
    function inner(){
        console.log("Kya haal Samachar MitAR");
    }
    return inner;
}



let returnedFuncVar = outer();
crossOriginIsolated.log(returnedFuncVar);
returnedFuncVar();

