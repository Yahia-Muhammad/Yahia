$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });
/*******************************************************************************/
window.onscroll = function(){
    console.log(window.pageYOffset);
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
    console.log(window.pageYOffset);
}

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

document.getElementById("right-node").onclick = function(){
    window.scrollTo(0,0);
}


var myIconsPageOne = document.querySelectorAll("#icons");
var myIconPOne = document.querySelectorAll("#icons-p");


for(var i = 0; i <= 3; i++){
    console.log(myIconsPageOne[i]);
}

myIconsPageOne[0].onclick = function(){
    window.scrollTo(0, 660);
}
myIconsPageOne[1].onclick = function(){
    window.scrollTo(0, 1000);
}
myIconsPageOne[2].onclick = function(){
    window.scrollTo(0, 1290);
}

var myIconsPageOneP = document.querySelectorAll("#icons-p");

for(var i = 0; i <= 3; i++){
    console.log(myIconsPageOneP[i]);
}

myIconsPageOneP[0].onclick = function(){
    window.scrollTo(0, 660);
}
myIconsPageOneP[1].onclick = function(){
    window.scrollTo(0, 1000);
}
myIconsPageOneP[2].onclick = function(){
    window.scrollTo(0, 1290);
}