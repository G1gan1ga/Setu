console.log("Hello, World!");
let a=1;
for(let i=0;i<10;i++){
    console.log(a);
    a++;
}
let obj={
    name:"John",
    age:30,
    "lund size": "negligible",
};
for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    
    const element = obj[key];
    console.log(key,element);
}