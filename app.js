console.log("Starting");

setTimeout( () => {console.log("1 seconds") ;}, 1000);

setTimeout( () => {console.log("0 seconds");},0)

console.log("Finishing");


const f = (x, y) => { console.log("ADD" + x + y);}

 setTimeout( (x,y) => {x+y}, 3000);