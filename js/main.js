/* Start Light Slide */
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });
/* End Light Slide */
/* Start OnScroll */
window.onscroll = function(){
    var myUp = window.pageYOffset;
    if(myUp >= 300 && myUp <= 1077){
        document.getElementById("html").style.width = "90%"
        document.getElementById("js").style.width = "80%"
        document.getElementById("photo").style.width = "70%"
    }else{
        document.getElementById("html").style.width = "0%"
        document.getElementById("js").style.width = "0%"
        document.getElementById("photo").style.width = "0%"
    }
}
/* End OnScroll */
/* Start OnLoad */
window.onload = function(){
    allScreenActive();
    if(window.innerWidth >= 1024){
        activiteAllAnimate();
    }else{
        hidContact();
    }
}
/* End OnLoad */
/* Start OnResize */
window.onresize = function(){

    allScreenActive();

}
/* End OnResize */


/* Start Animate Page-3 Left */
var myBoxs = document.querySelectorAll("#boxs");

document.getElementById("start").onclick = function(){
    // justify-content: flex-start;
    myBoxs.forEach((box) => {
        box.style.justifyContent = "flex-start";
    });

}
document.getElementById("center").onclick = function(){
    // justify-content: center;
    myBoxs.forEach((box) => {
        box.style.justifyContent = "center";
    });
}
document.getElementById("end").onclick = function(){
    // justify-content: flex-end;
    myBoxs.forEach((box) => {
        box.style.justifyContent = "flex-end";
    });
}
/* End Animate Page-3 Left */
/* Start Btn On Up */
var myRightBtn = document.getElementById("right-node");

myRightBtn.onclick = function(){
    window.scrollTo(0,0);
}
/* End Btn On Up */
/* Start Up Icon Page-1 */
var myIconsPageOne = document.querySelectorAll("#icons");
var myIconPOne = document.querySelectorAll("#icons-p");

function upp(num1, num2, num3){
    myIconsPageOne[0].onclick = function(){
        window.scrollTo(0, num1);
    }
    myIconsPageOne[1].onclick = function(){
        window.scrollTo(0, num2);
    }
    myIconsPageOne[2].onclick = function(){
        window.scrollTo(0, num3);
    }
    
    myIconPOne[0].onclick = function(){
        window.scrollTo(0, num1);
    }
    myIconPOne[1].onclick = function(){
        window.scrollTo(0, num2);
    }
    myIconPOne[2].onclick = function(){
        window.scrollTo(0, num3);
    }
    return;
}

function allScreenActive(myScreenOne){
    if(window.innerWidth >= 1440){

        myScreenOne = upp(675, 1030, 1268);

    }else if(window.innerWidth >= 1024){

        myScreenOne = upp(577, 930, 1233);

    }else if(window.innerWidth >= 768){

        myScreenOne = upp(580, 930, 1219);

    }else if(window.innerWidth >= 425){

        myScreenOne = upp(433, 740, 1202);

    }else if(window.innerWidth >= 375){

        myScreenOne = upp(433, 735, 1209);

    }else if(window.innerWidth >= 320){

        myScreenOne = upp(435, 735, 1214);

    }
    return;

}

/* End Up Icon Page-1 */
/* Start Animate Larg Screen */

function activiteAllAnimate(){
    iconPageOne();
    btnUp();
    sochialLeft();
}

    function iconPageOne(){

        for(var z = 0; z <= myIconsPageOne.length - 1; z++){

            myIconsPageOne[z].onmouseenter = function(){
                this.style.fontSize = "300%";
                this.style.backgroundColor = "#ff3a2a";
                this.style.color = "#fff";
            }
            myIconsPageOne[z].onmouseleave = function(){
                this.style.fontSize = "265%";
                this.style.backgroundColor = "#fff";
                this.style.color = "#000";
            }
            myIconPOne[z].onmouseenter = function(){
                this.style.backgroundColor = "#ff3a2a";
                this.style.color = "#fff";
            }
            myIconPOne[z].onmouseleave = function(){
                this.style.backgroundColor = "#fff";
                this.style.color = "#000";
            }
        }
    }










    
    function btnUp(){
        myRightBtn.onmouseenter = function(){
            this.style.fontSize = "65px"
        }
        myRightBtn.onmouseleave = function(){
            this.style.fontSize = "55px"
        }
    }
    function sochialLeft(){
        var myBtnLeft = document.querySelectorAll("#link-left");

        for(var x = 0; x <= myBtnLeft.length -1; x++){

            myBtnLeft[x].onmouseenter = function(){
                this.style.fontSize = "40px"
            }

            myBtnLeft[x].onmouseleave = function(){
                this.style.fontSize = "30px"
            }
        }
        return;
    }
    function hidContact(){
        document.getElementById("hid-input").style.display = "none";
    }
