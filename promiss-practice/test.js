function sleep(sleepMs){
    return new Promise(function(resolve){
        setTimeout(() => {
            console.log(sleepMs);
            resolve();
        }, sleepMs)
    });
}

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