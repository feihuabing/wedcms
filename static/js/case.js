var divs = document.getElementsByClassName("h340 mt40")
for(var div of divs){
    div.onmouseover=function(){
        var div = this;
        var img=div.children[0].children[0];
        img.style.transform="scale(1.1)";
        var shadow=div.children[0].children[1];
        shadow.style.opacity="0";
        var d=div.children[1];
        d.style.height="80px";
        var p1=div.children[2];
        var p2=div.children[3];
        p1.style.color="white";
        p2==undefined?1:p2.style.color="white";
    }
    div.onmouseout=function(){
        var div = this;
        var img=div.children[0].children[0];
        img.style.transform="scale(1)";
        var shadow=div.children[0].children[1];
        shadow.style.opacity="1";
        var d=div.children[1];
        d.style.height="0";
        var p1=div.children[2];
        var p2=div.children[3];
        p1.style.color="black";
        p2==undefined?1:p2.style.color="black";
    }
}
var hts = document.getElementsByClassName("ht");
for(var ht of hts){
    ht.style.animation="change 2s 1";
}
var mt0=document.documentElement.scrollTop+window.innerHeight;
if(mt0>660){
    var divs=document.getElementsByClassName("h340 mt40 position-relative pointer");
    divs[0].style.animation="allchange13 .5s linear";
    setTimeout(function(){
        divs[0].style.opacity=1;
    },490)
    divs[1].style.animation="allchange13 .5s linear";
    divs[1].style.animation="allchange13 .5s linear";
    setTimeout(function(){
        divs[1].style.opacity=1;
    },490)
    divs[2].style.animation="allchange13 .5s linear";
    divs[2].style.animation="allchange13 .5s linear";
    setTimeout(function(){
        divs[2].style.opacity=1;
    },490)
}
function scroll(){
    var mt=document.documentElement.scrollTop+innerHeight;
    console.log(mt);
    var divs=document.getElementsByClassName("h340 mt40 position-relative pointer");
    if(mt>660){

        divs[0].style.animation="allchange13 .5s linear";
        setTimeout(function(){
            divs[0].style.opacity=1;
        },490)
        divs[1].style.animation="allchange13 .5s linear";
        setTimeout(function(){
            divs[1].style.opacity=1;
        },490)
        divs[2].style.animation="allchange13 .5s linear";
        setTimeout(function(){
            divs[2].style.opacity=1;
        },490)
    }if(mt>1100){
        divs[3].style.animation="allchange13 .5s linear";
        setTimeout(function(){
            divs[3].style.opacity=1;
        },490)
        divs[4].style.animation="allchange13 .5s linear";
        setTimeout(function(){
            divs[4].style.opacity=1;
        },490)
        divs[5].style.animation="allchange13 .5s linear";
        setTimeout(function(){
            divs[5].style.opacity=1;
        },490)
    }if(mt>1470){
        divs[6].style.animation="allchange13 .5s linear";
        setTimeout(function(){
            divs[6].style.opacity=1;
        },490)
        divs[7].style.animation="allchange13 .5s linear";
        setTimeout(function(){
            divs[7].style.opacity=1;
        },490)
        divs[8].style.animation="allchange13 .5s linear";
        setTimeout(function(){
            divs[8].style.opacity=1;
        },490)
    }if(mt>1850){
        divs[9].style.animation="allchange13 .5s linear";
        setTimeout(function(){
            divs[9].style.opacity=1;
        },490)
        divs[10].style.animation="allchange13 .5s linear";
        setTimeout(function(){
            divs[10].style.opacity=1;
        },490)
        divs[11].style.animation="allchange13 .5s linear";
        setTimeout(function(){
            divs[11].style.opacity=1;
        },490)
    }
}
bgbanner5.onmousemove=function(e){
    var div=this;
    div.parentElement.style.backgroundPosition=`${-e.offsetX*0.1}px ${-e.offsetY*0.1}px`
}
