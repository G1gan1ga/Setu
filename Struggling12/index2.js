    let a=6
    let b=1,c=1;
    let arr = Array.from(Array(a+1).keys()).slice(1);
    const fact=(e,d)=>{
        return e*d;
    }
    console.log(arr.reduce(fact));
    for (const key in arr) {
         b*= arr[key];
        
        
    };
    console.log(b);
    for (const element of arr) {
        c*= element;
    }
    console.log(c);