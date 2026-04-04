// function getData(){
// return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         // resolve('data fetched');
//         reject('server error')

//     },3000)
// })
// }
// getData()
// .then(result =>{
//     console.log(result);
// })
// .catch(error=>{
//     console.error(error);
// })

// function getData (){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             // resolve('data fetched');
//             reject('Server Error');
//         }, 3000);
//     })
// }

// getData()
// .then(result=>{
//     console.log(result);
// })
// .catch(error=>{
//     console.error(error);
// })

// function getData(){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve('data fetched');
//             reject('Server Error');
//         }, 3000);
//     })
// }

// getData()
// .then(result=>{
//     console.log(result);
// })
// .catch(error=>{
//     console.error(error);
// })

function getData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('data fetched');
            reject('server error');
        }, 3000);
    })
}

getData()
//then shows the result
.then(result=>{
    console.log(result);
})
//Catch cathes the error 
.catch(error=>{
    console.error(error);
})