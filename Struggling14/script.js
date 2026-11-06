function card(title,cname,views,months,time)
{
    if(views>9999 &&views<999999){
        views=Math.floor(views/1000) +"K";
    }
    else if(views>999999)
        views=Math.floor(views/100000) +"K";
    document.querySelector(".time").innerText = time;
    document.querySelector(".months").innerText = months;
    document.querySelector(".views").innerText = views;
    document.querySelector(".title").innerText = title;
    document.querySelector(".cname").innerText = cname;
}
card(
    prompt("Enter title:"),
    prompt("Enter channel name:"),
    prompt("Enter views:"),
    prompt("Enter months:"),
    prompt("Enter video duration:")
);