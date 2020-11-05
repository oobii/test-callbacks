let p = new Promise((resolve,reject) => {
    setTimeout(() => {resolve("OK after 3 seconds")}, 3000)
});

p.then((msg) => console.log(msg))
.finally(() => {console.log("executing finally")})


let p2 = new Promise((resolve,reject) => {
    setTimeout(() => {reject("Test Error after 3 seconds")}, 3000)
});

p2.then((msg) => console.log(msg))
.catch((err) => {console.log(err)})
.finally(() => {console.log("executing finally")})


let p3 = new Promise((resolve,reject) => {
    setTimeout(() => {resolve("It will run only when main() function exits ")}, 0)
});

p3.then((msg) => console.log(msg))

console.log("The last function call before main() exit");

