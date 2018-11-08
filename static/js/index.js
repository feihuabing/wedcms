function scroll() {
    var inwid = window.innerWidth;
    var inhei = window.innerHeight;
    if (inwid >= 1440) {
        console.log(document.documentElement.scrollTop);
        console.log(document.documentElement.scrollTop + inhei)
        var mt=document.documentElement.scrollTop + inhei;
        if (mt > 800 && mt < 1400) {
            var divs = document.getElementsByClassName("percent25 position-relative showhid");
            divs[0].style.animation = "allchange1 .8s linear";
            divs[1].style.animation = "allchange2 .5s linear";
            divs[2].style.animation = "allchange3 .5s linear";
            divs[3].style.animation = "allchange4 .8s linear";
        }
        if (mt > 1400 && mt < 1510) {
            var div = document.getElementsByClassName("cwhite fz40 text-center font-weight-bold zxal");
            div[0].style.animation = "allchange5 .6s linear";
        }
        if (mt > 1485) {
            var div = document.getElementsByClassName("text-center cwhite mt20");
            div[0].style.animation = "allchange0 .8s linear"
        }
        if (mt > 1510) {
            var div = document.getElementsByClassName("w358h270 mcenter overhid position-relative pointer");
            div[0].style.animation = "allchange7 .8s linear";
            div[1].style.animation = "allchange7 .8s linear";
            div[2].style.animation = "allchange6 .8s linear";
            div[3].style.animation = "allchange6 .8s linear";
        }
        if (mt > 1910) {
            var div = document.getElementsByClassName("fz40 text-center font-weight-bold c666");
            div[0].style.animation = "allchange8 .8s linear";
        }
        if (mt > 1980) {
            var div = document.getElementsByClassName("fz18 text-center c666 jj");
            div[0].style.animation = "allchange0 .8s linear";
        }
        if (mt > 2045) {
            var divall = document.getElementsByClassName("w276h230 mcenter bg-white pt10")
            divall[0].style.animation = "allchange9 .6s linear";
            setTimeout(function () {
                divall[0].style.opacity = 1
            }, 600)
            divall[1].style.animation = "allchange9 .6s linear .2s";
            setTimeout(function () {
                divall[1].style.opacity = 1
            }, 800)
            divall[2].style.animation = "allchange9 .6s linear .4s";
            setTimeout(function () {
                divall[2].style.opacity = 1
            }, 1000)
            divall[3].style.animation = "allchange9 .6s linear .6s";
            setTimeout(function () {
                divall[3].style.opacity = 1
            }, 1200)
        }
        if (mt > 2300) {
            var btn = $("introduce");
            btn.style.animation = "allchange0 .5s linear";
        }
        if (mt > 2460) {
            var div = document.getElementsByClassName("fz40 text-center c666 font-weight-light");
            div[0].style.animation = "allchange10 .5s linear"
        }
        if (mt > 2550) {
            var div = document.getElementsByClassName("text-center fz18 c666 zxdt");
            div[0].style.animation = "allchange0 .5s linear";
        }
        if (mt > 2620) {
            var div = document.getElementsByClassName("w585h180 bgiline mt30 d-flex p30 justify-content-between pointer flex-wrap");
            div[0].style.animation = "allchange1 .5s linear";
            div[1].style.animation = "allchange12 .5s linear";
            div[2].style.animation = "allchange4 .5s linear";
        }
        if (mt > 2820) {
            var div = document.getElementsByClassName("w585h180 bgiline mt30 d-flex p30 justify-content-between pointer flex-wrap");
            div[3].style.animation = "allchange13 .5s linear";
        }
        if (mt > 3290) {
            var div = document.getElementsByClassName("w216h320 mt20 bg-white pointer p0_15");
            div[0].style.animation = "allchange14 1s linear";
            div[1].style.animation = "allchange15 1s linear";
            div[2].style.animation = "allchange16 1s linear";
            div[3].style.animation = "allchange17 1s linear";
            div[4].style.animation = "allchange18 1s linear";
        }
        if (mt > 3850) {
            var div = document.getElementsByClassName("w280h210 bgwhite mt20 bdr25 transitionall1s pointer p20_0");
            div[0].style.animation = "allchange19 .5s linear";
            div[1].style.animation = "allchange20 .5s linear"
        }
        var scrollFunc = function (e) {
            var direct = 0;
            e = e || window.event;
            if (e.wheelDelta) {
                if (e.wheelDelta > 0) {
                    var wheelup = document.documentElement.scrollTop - 100;
                    if (wheelup < 0) {
                        wheelup = 0
                    }
                }
                if (e.wheelDelta < 0) { //当滑轮向下滚动时
                    var wheeldown = document.documentElement.scrollTop + 100;
                    var mt = wheeldown + inhei;
                    if (mt > 800 && mt < 1400) {
                        var divs = document.getElementsByClassName("percent25 position-relative showhid");
                        divs[0].style.animation = "allchange1 .8s linear";
                        divs[1].style.animation = "allchange2 .5s linear";
                        divs[2].style.animation = "allchange3 .5s linear";
                        divs[3].style.animation = "allchange4 .8s linear";
                    }
                    if (mt > 1400 && mt < 1510) {
                        var div = document.getElementsByClassName("cwhite fz40 text-center font-weight-bold zxal");
                        div[0].style.animation = "allchange5 .6s linear";
                    }
                    if (mt > 1485) {
                        var div = document.getElementsByClassName("text-center cwhite mt20");
                        div[0].style.animation = "allchange0 .8s linear"
                    }
                    if (mt > 1510) {
                        var div = document.getElementsByClassName("w358h270 mcenter overhid position-relative pointer");
                        div[0].style.animation = "allchange7 .8s linear";
                        div[1].style.animation = "allchange7 .8s linear";
                        div[2].style.animation = "allchange6 .8s linear";
                        div[3].style.animation = "allchange6 .8s linear";
                    }
                    if (mt > 1910) {
                        var div = document.getElementsByClassName("fz40 text-center font-weight-bold c666");
                        div[0].style.animation = "allchange8 .8s linear";
                    }
                    if (mt > 1980) {
                        var div = document.getElementsByClassName("fz18 text-center c666 jj");
                        div[0].style.animation = "allchange0 .8s linear";
                    }
                    if (mt > 2045) {
                        var divall = document.getElementsByClassName("w276h230 mcenter bg-white pt10")
                        divall[0].style.animation = "allchange9 .6s linear";
                        setTimeout(function () {
                            divall[0].style.opacity = 1
                        }, 600)
                        divall[1].style.animation = "allchange9 .6s linear .2s";
                        setTimeout(function () {
                            divall[1].style.opacity = 1
                        }, 800)
                        divall[2].style.animation = "allchange9 .6s linear .4s";
                        setTimeout(function () {
                            divall[2].style.opacity = 1
                        }, 1000)
                        divall[3].style.animation = "allchange9 .6s linear .6s";
                        setTimeout(function () {
                            divall[3].style.opacity = 1
                        }, 1200)
                    }
                    if (mt > 2300) {
                        var btn = $("introduce");
                        btn.style.animation = "allchange0 .5s linear";
                    }
                    if (mt > 2460) {
                        var div = document.getElementsByClassName("fz40 text-center c666 font-weight-light");
                        div[0].style.animation = "allchange10 .5s linear"
                    }
                    if (mt > 2550) {
                        var div = document.getElementsByClassName("text-center fz18 c666 zxdt");
                        div[0].style.animation = "allchange0 .5s linear";
                    }
                    if (mt > 2620) {
                        var div = document.getElementsByClassName("w585h180 bgiline mt30 d-flex p30 justify-content-between pointer flex-wrap");
                        div[0].style.animation = "allchange1 .5s linear";
                        div[1].style.animation = "allchange12 .5s linear";
                        div[2].style.animation = "allchange4 .5s linear";
                    }
                    if (mt > 2820) {
                        var div = document.getElementsByClassName("w585h180 bgiline mt30 d-flex p30 justify-content-between pointer flex-wrap");
                        div[3].style.animation = "allchange13 .5s linear";
                    }
                    if (mt > 3290) {
                        var div = document.getElementsByClassName("w216h320 mt20 bg-white pointer p0_15");
                        div[0].style.animation = "allchange14 1s linear";
                        div[1].style.animation = "allchange15 1s linear";
                        div[2].style.animation = "allchange16 1s linear";
                        div[3].style.animation = "allchange17 1s linear";
                        div[4].style.animation = "allchange18 1s linear";
                    }
                    if (mt > 3850) {
                        var div = document.getElementsByClassName("w280h210 bgwhite mt20 bdr25 transitionall1s pointer p20_0");
                        div[0].style.animation = "allchange19 .5s linear";
                        div[1].style.animation = "allchange20 .5s linear"
                    }
                }
            }
        }
    }
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    //滚动滑轮触发scrollFunc方法
    window.onmousewheel = document.onmousewheel = scrollFunc;
    function scroll() {
        console.log(1);
    }
}