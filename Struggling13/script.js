let arr=["red","yellow","green","blue","pink"];
let i=0;

    for(i=0;i<5;i++)
    {
        let a=Math.floor(Math.random()*5);
        let t=document.body.childNodes[1];
        t.children[i].style.backgroundColor=arr[a];
    }
