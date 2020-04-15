// create a function
// function Sum(a, b, callback)
// {
//     return a + b;
// }

// console.log(Sum(1,2, () =>{}));

// task is to add 2 values
function Person2()
{
    Person1(1,2, (result) => {
        console.log(result);
    });
}

// person1 gave a task to person 2
function Person1(a, b, callback)
{
    // return a + b;
    const c = a + b;
    // sends the value of c to Peron2 result callback
    callback(c);
}

// run Person2 function
Person2(); 



//(1 + 2) * (3 + 4)
// (a + b) * (c + d)

function Calculate() {
    Sum(1, 2, (sumOfAB) => {
        console.log(sumOfAB)
        Sum(3, 4, (sumOfCD) => {
            console.log(sumOfCD)
            Multiple(sumOfAB, sumOfCD, (mulipleOfABCD) => {
                console.log(mulipleOfABCD)
            })
        })
    })
}

function Sum(a, b, notify) {
    const c = a + b;
    notify(c)
}

function Multiple(a, b, notify) {
    const c = a * b;
    notify(c)
}

Calculate()

//((1 + 2) - 4) * (3 + 4)
// (a + b) * (c + d)