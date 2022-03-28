console.log("callbacks");

const displayCalculatorResult = (result) => {
    console.log(result);
}
const calculatorWithCallback = (num1, num2, callingBack) => {
    let result = num1 + num2;
    // calling the callback function    
    callingBack(result);
}
calculatorWithCallback(1, 19, displayCalculatorResult);

console.log();
console.log("promise");

const myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("the server sent a response!");
        reject("error occured :(");
    }, 1000);
});

myFirstPromise
    .then((data) => {
        // resolve part
        console.log(data);
    })
    .catch((error) => {
        // reject part
        console.log(error);
    });

console.log();