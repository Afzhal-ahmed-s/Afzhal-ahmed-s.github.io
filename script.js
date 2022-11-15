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

window.onload = function () {
    setTimeout(appeardiv,3000);
}
function appeardiv() {
    document.getElementsByClassName('header').style.display= "block";
}

setTimeout(function () {
    $(".header").show()
}, 4000);

document.getElementById("dual_fn_res").addEventListener("click", dual_fn);

function dual_fn() {
    window.location.href = "https://drive.google.com/file/d/1kenVWj3VuGcZ9-iWmy23zgT61H_9YN8H/view?usp=sharing";
}