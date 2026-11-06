/* function loadScript(src,callback)
        {
            let script=document.createElement('script')
            script.src=src;
            script.onload=()=>callback(script);
            document.head.append(script)
        }
        loadScript ( `https://cdn.harry.com`, (script) =>{
alert ('script is loaded');
alert ( script.src) ;})
Promise((resolve,reject)=>{
    let script=document.createElement('script')
    script.src=src;
    script.onload=()=>resolve(script);
    script.onerror=()=>reject(new Error(`Script load error for ${src}`));
    document.head.append(script);
})*/
let script=document.createElement("script");
script.src="index2.js";
document.head.appendChild(script);
let x=5;
var y=10;
console.log(x+y);
Promise=new Promise((resolve,reject)=>{
    let z=x*y;
    setTimeout(()=>{
        resolve(console.log(z));
    },3000)});
    Promise.then(()=>console.log('hello'));
    Promise.catch(()=>console.log('Nigga'));
async function loadScript(){
    

}
    