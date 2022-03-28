console.log("async await");

const myFunction = () => {
    return "a normal function";
};
console.log(myFunction());

const myAsyncFuntion = async () => {
    return "a promise function";
};
console.log(myAsyncFuntion());

const myAsyncFuntion2 = async () => {
    const myFirstPromise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("the server sent a response!");
            reject("error occurred ;)");
        }, 1000);
    });
    // run this first
    console.log("let's get started");
    // run this second but wait to finish (1 second)
    console.log(await myFirstPromise2);
    // run this second but not wait to finish
    console.log(myFirstPromise2);
    // run only when the promise function above has resolved
    console.log("this function had to wait for the call above to finish");
};

myAsyncFuntion2();