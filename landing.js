const rack= document.querySelector(".slide-rack");
var i=0;
setInterval(()=> {
    i++;
    if(i%2==0)
    rack.style.transform="translateX(-100vw)";
    else
        rack.style.transform="translateX(0vw)";
}, 5000);