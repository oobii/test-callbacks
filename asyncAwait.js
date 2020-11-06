function doSomething() { return new Promise((resolve,reject) => {
    setTimeout(() => {resolve("OK after 3 seconds")}, 3000)
} ) };


async function execute() {

    try {
        let msg = await doSomething();
        console.log(msg)
    } catch(error) {
        console.log(error);
    } finally {
        console.log("We are finally done!");
    }
    
}

execute();
