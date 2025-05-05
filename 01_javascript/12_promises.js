let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve(); // when successful
      myReject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );



let additionPromise = (a,b) => {
  return new Promise ((resolve, reject)=>{
    if (a>0 && b >0){
      let result = a+b;
      //success
      resolve(result);
    }else{
      //failure
      reject("you cannot enter neg no")
    }
  });
}

//consume
additionPromise(-10,20)
.then (result)