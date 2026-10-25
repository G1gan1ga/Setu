console.log("Faulty calculator");
let a=Math.random();
let b=prompt("Enter another number: ")
let operation=prompt("Enter an operation (+,-,x,/,^): ")
let c=prompt("Enter a number: ")
let d;
let obj={
    "+":"-",
    "-":"/",
    "x":"+",
    "/":"**",
    "**":"x"
}
if(a<0.1){
    operation=obj[operation];
}
alert(`$eval(${c} ${operation} ${b})`)
console.log(`(${c} ${operation} ${b})`);

