


const PromisesOne = new Promise(function(resolve,reject){

setTimeout(function(){

    console.log("Hello Abdul.Moiz");
    resolve({Username: "Abdul.Moiz" , Age: 18 , email: "Moiz@gmail.com"})

},1000)

}).then(function(user){

    console.log(user);
    
})