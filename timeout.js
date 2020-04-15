setTimeout(() =>{
    console.log("0");    
}, 200); // has a delay and is asynchronous

console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

setTimeout(() =>{
    console.log("6");    
}, 1000);// has a delay and is asynchronous

setTimeout(() =>{
    console.log("7");    
}, 0);// has a delay and is asynchronous

setTimeout(() =>{
    console.log("8");    
}, 0);// has a delay and is asynchronous

console.log("9");

console.log("10");