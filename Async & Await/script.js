function getdata(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('data fetched');
            reject('server error');
        }, 3000);
    })
}

async function handleData(params) {
    try {
        const result = await getdata();
        console.log(result);
    }
    catch(error){
console.error(error);

    }
}

handleData();