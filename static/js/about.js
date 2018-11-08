/**
 * Created by web on 2018/9/19.
 */
function scroll(){
    var inhei=window.innerHeight;
    var inwid=window.innerWidth;
    var mt=document.documentElement.scrollTop+inhei;
    if(mt>1600){
        var div=document.getElementsByClassName("w720h488 bg7c71fa position-absolute t90l490");
        div[0].style.animation="change4 .5s linear";
        setTimeout(function(){
            div[0].style.opacity="1";
        },490)

        var div1=document.getElementsByClassName("w600h370 position-absolute t150 zindex2 p80_90 bg35b5f8");
        div1[0].style.animation="change4 .5s linear .5s";
        setTimeout(function(){
            div1[0].style.opacity="1";
        },990)
    }if(mt>2400){
        var div2=document.getElementsByClassName("w600h390 position-absolute t150 zindex2 bg7c71fa");
        div2[0].style.animation="change4 .5s linear";
        setTimeout(function(){
            div2[0].style.opacity="1";
        },490)

        var div3=document.getElementsByClassName("w660h420 position-absolute t150 zindex2 p80_90 bg8d83ff t-20l400");
        div3[0].style.animation="change4 .5s linear .5s";
        setTimeout(function(){
            div3[0].style.opacity="1";
        },990)
    }if(mt>3000){
        var div4=document.getElementsByClassName("w1200 h390 m200auto350 position-relative bg7c71fa opacity0");
        div4[0].style.animation="change4 .5s linear";
        setTimeout(function(){
            div4[0].style.opacity="1";
        },490)

        var div5=document.getElementsByClassName("w480h450 position-absolute zindex2 p80_90 bg35b5f8 t-30l80");
        div5[0].style.animation="change4 .5s linear .5s";
        setTimeout(function(){
            div5[0].style.opacity="1";
        },990)

        var div6=document.getElementsByClassName("position-absolute l650t-80 opacity0");
        div6[0].style.animation="change4 .5s linear 1s";
        setTimeout(function(){
            div6[0].style.opacity="1";
        },1490)
        var div7=document.getElementsByClassName("w10h10 border-radius position-absolute bgwhite t-40l800 change3 opacity0");
        setTimeout(function(){
            div7[0].style.opacity="1";
        },1490)
        var div8=document.getElementsByClassName("position-absolute l700t-30 opacity0");
        div8[0].style.animation="change4 .5s linear 1s";
        setTimeout(function(){
            div8[0].style.opacity="1";
        },1490)
        var div9=document.getElementsByClassName("fz50 position-absolute w50 l1050t-110 opacity0");
        div9[0].style.animation="change4 .5s linear 1s";
        setTimeout(function(){
            div9[0].style.opacity="1";
        },1490)
    }
}
