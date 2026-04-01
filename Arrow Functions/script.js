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


// function outer (){
//     function inner(){
//         console.log("Kya haal Samachar MitAR");
//     }
//     return inner;
// }



// let returnedFuncVar = outer();
// crossOriginIsolated.log(returnedFuncVar);
// returnedFuncVar();

// let a = 10;

// function outer(){
//     function inner(){

//         console.log(a);
      
//     }
//     return inner;
// }

// let returnedFuncVar = outer();

// a=80;
// console.log(returnedFuncVar);
// returnedFuncVar();


function outer(){
    function inner(){
        let count = 0;
        count++;
        console.log(count);

    }
    return inner;
}

let incrementCounter = outer();
incrementCounter();
incrementCounter();
incrementCounter();
incrementCounter();


