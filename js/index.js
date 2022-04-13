window.onload=function () {
    let oToolbar=document.querySelector(".toolbar");
    let oNav=document.querySelector(".nav");
    let oPlay=document.querySelector(".play>a");
    let oPlays=document.querySelector(".plays");
    let oMenu=document.querySelector("#myMenu");
    let oUp=document.querySelector(".menu-up");
    let oDown=document.querySelector(".menu-down");
    let oMouse=document.querySelector(".mouse");
    new fullpage('#fullpage', {
        //设置每一屏背景颜色
        sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE','#000000', '#4BBFC3', '#7BAABE', '#000000'],
        //设置指示器
        navigation:true,
        //设置指示器提示信息
        navigationTooltips:['1F', '2F', '3F', '4F'],
        verticalCentered:false,
        onLeave:function (origin, destination, direction) {
            if(destination.isFirst){
                oToolbar.style.display="block";
                oNav.style.top="51px";
                oMenu.style.display="none"
            }else {
                oToolbar.style.display="none";
                oNav.style.top="0";
                oMenu.style.display="block"
            }
            if(destination.isLast){
                oMouse.style.display="none"
            }else {
                oMouse.style.display="block"
            }
        },
        anchors: ['firstPage','secondPage', 'thirdPage', 'fourthPage','fifthPage','sixPage'],
        menu: '#myMenu'
    });
    oPlay.onclick=function () {
        oPlays.play();
    }
    oUp.onclick=function () {
        fullpage_api.moveSectionUp()
    }
    oDown.onclick=function () {
        fullpage_api.moveSectionDown()
    }
    initSectionAnimation();
}
function initSectionAnimation(){
    let oLis=document.querySelectorAll(".section-four>ul>li");
    let oImgs=document.querySelectorAll(".section-four>ul>li>img");
    let oH=document.querySelectorAll(".section-four>ul>li>h3");
    for (let i=0;i<oLis.length;i++){
        let item=oLis[i];
        item.onmouseenter=function (){
            oLis[0].style.width="20%"
            oLis[1].style.width="20%"
            oLis[2].style.width="20%"
            oLis[i].style.width="60%"
            oImgs[i].style.opacity="1"
            oH[i].style.opacity="0"
            if(i===0){
                oImgs[0].style.left="0"
            }else if (i===2){
                oImgs[2].style.right="0"
            }
        }
        item.onmouseleave=function (){
            oLis[0].style.width="33%"
            oLis[1].style.width="34%"
            oLis[2].style.width="33%"
            oImgs[i].style.opacity="0.6"
            oH[i].style.opacit="1"
            if(i===0){
                oImgs[0].style.left="-220px"
            }else if (i===2){
                oImgs[2].style.right="-290px"
            }
        }
    }
}