document.getElementsByTagName("a").onhover = function() {
    document.getElementsByTagName("a").style.textDecoration = "underline !important";
};

document.getElementById("box2").onhover = function() {
    console.log("Hovering box");
};

hideOrShowTechBox();


window.addEventListener("resize", function() {
   hideOrShowTechBox();
});

function hideOrShowTechBox() {
    if(screen.width > 480){
        document.getElementById("techBoxDesktop").style.display = "block";
        document.getElementById("techBoxMobile").style.display = "none";
    }
    else{
        document.getElementById("techBoxMobile").style.display = "block";
        document.getElementById("techBoxDesktop").style.display = "none";
    }
}