

// function fetchData(callback){
//     setTimeout(()=>{
//         let message = 'fetched data';
//         callback(message, null);
//     }, 5000);
// }

// function handleData(data, error){
//     if (error){
//         console.error(error);
//     }else{
//         console.log(data);
//     }
// }

// fetchData(handleData);


// function fetchdData(callback){
//     setTimeout(()=>{
//         let data = 'fetched data';
//         callback(data, null);
//     }, 5000)
// }

// function handleData(data, error){
//     if(error){
//         console.error(error);
//     }else{
//         console.log(data)
//     }

    

// }

// console.log('start')

// fetchdData(handleData)

function fetchData(callback){
    setTimeout(()=>{
        let data = 'fetch data';
        callback(data, 'server error');
    }, 3000)
}

function handleData(data, error){
    if(error){
        console.error('Server error');
    }else{
        console.log(data);
    }
}
console.log('Start');
fetchData(handleData);