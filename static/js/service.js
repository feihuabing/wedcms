/**
 * Created by web on 2018/9/20.
 */
banner0.onmousemove=function(e){
    var div=this;
    div.parentElement.style.backgroundPosition=`${-e.offsetX*0.1}px ${-e.offsetY*0.1}px`
}