// promises are used to handle multiple asynchronous operations

// working of Promise
// 4 basic states of pending
// pending: initial state, neithre fulfilled with a value nor rejected with an error
// fulfilled: action related to the promise succeeded
// rejected: action related to the promise failed
// settled: promise has fulfilled or rejected


// .then() is invoked either on resolve or reject
// .catch() is invoked when a promise is either rejected or some error has occured in execution
// .then() or .catch() can make the promise state from fulfilled or rejected state to settlements and not to any other
// a settled promise mush have to return a value which must not change


//                                                   Async or Sync Action
//                      settled
//                      .then(fulfilment)
//          fulfilled
//          resolve()
//                                          Return
// pending                                           Pending                    .then()
// Promise                                           Promise                    .catch
//                                          Return
//          rejected
//          Reject()
//                      Settled
//                      .then(Rejection) 
//                      .catch(Rejection)
//                                                    Error handling


// function Sum(a, b)
// {
//     // return a promise
//     // executor function determines if the promise is fulfilled or rejected
//     return new Promise((resolve, reject) =>{
//         // will change the state of this promise to resolve
//         // now the promise is in pending state
//         resolve(a + b);

//         // I can also use resolve like this
//         // const result = a + b;
//         // resolve(result);
//     });
// }

function Sum(a, b)
{
    // return a promise
    // executor function determines if the promise is fulfilled or rejected
    return new Promise((resolve, reject) =>{
        // will change the state of this promise to resolve
        // now the promise is in pending state
        const result = a + b;

        // generate a random number
        const randomMillisec = Math.round(Math.random() * 1000);
        // console.log("The timeout is: " + randomMillisec);

        // set Timeout
        setTimeout(() =>{
            // resolve the promise
            resolve(result); 

            // reject a promise using an object
            // reject({a,b,result});
        }, randomMillisec);
    });
}

function Multiply(a, b)
{
    // return a promise
    // executor function determines if the promise is fulfilled or rejected
    return new Promise((resolve, reject) =>{
        // will change the state of this promise to resolve
        // now the promise is in pending state
        const result = a * b;

        // generate a random number
        const randomMillisec = Math.round(Math.random() * 1000);
        // console.log("The timeout is: " + randomMillisec);

        // set Timeout
        setTimeout(() =>{
            // resolve the promise
            resolve(result);  

            // reject promise
            // reject(result)   
            
        }, randomMillisec);
    });
}


// // call the Sum function which will return a promise
// // you have a callback in the then() which we call when the data is received
// Sum(1,2).then((result) =>{
//     console.log(result);
// });

// Sum(3,4).then((result) =>{
//     console.log(result);
// });


// Multiply(100,200).then((result) =>{
//     console.log(result);
// });


// crate a chain of promises


// Sum(1,2).then((result) =>{
//     // console.log(result);
// });

// Sum(3,4).then((result) =>{
//     // console.log(result);
// });

// Promise all takes an array
// in the then statements, you will get an array of 2 values
Promise.all([Sum(1,2), Sum(3,4)])
.then((values) =>{
    // console.log(values)
    return Multiply(...values);
})
.then((result) =>{
    console.log(result);
})
.catch((err) =>{
    console.error("error", err)
})
// Multiply(100,200).then((result) =>{
//     // console.log(result);
// });




// // Promise with all using files
// const fs = require("fs");
// const util = require("util");
// var read = util.promisify(fs.readFile);

// // Promise
// Promise
// .all([
//     read(data1.txt),
//     read(data2.txt),
//     read(data3.txt) ])
// .then(data =>{
//     const [data1, data2, data3] = data;
//     console.log(data1.toString());
//     console.log(data2.toString());
//     console.log(data3.toString());
// });


