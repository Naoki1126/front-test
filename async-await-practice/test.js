function sleep(val, sleepMs){
    return new Promise(function(resolve){
        setTimeout(() => {
            console.log(val++);
            resolve(val);
        }, sleepMs)
    });
}

async function init(){
   let val = await sleep(0, 1000)
   val = await sleep(val, 1000)
   val = await sleep(val, 1000)
   val = await sleep(val, 1000)
   val = await sleep(val, 1000)
   val = await sleep(val, 1000)
   val = await sleep(val, 1000)
   console.log(val)
}

// init();

// sleep(1000).then(function(){
//     console.log(1);
//     return sleep(2000);
// }).then(function(){
//     console.log(2);
//     return sleep(1000);
// }).then(function(){
//     console.log(3)
//     return sleep(3000)
// }).then(function(){
//     console.log(4);
//     return sleep(4000);
// })