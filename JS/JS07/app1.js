
console.log("asynchronous");

const doSomething = () => {
    console.log("do something");
}
const callExternalServer = () => {
    setTimeout(() => {
        console.log("call external server completed");
    }, 1);
}
const doSOmethingElse = () => {
    console.log("do something else");
}
doSomething();
callExternalServer();
doSOmethingElse();