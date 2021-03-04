$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll >= 350){
        document.querySelector(".navbar").style.backgroundColor="rgb(218, 218, 65)";
        document.querySelector(".navbar").style.heigth="80px";
        document.querySelector(".navbar").style.paddingTop="1.5rem";
    }
    else{
        document.querySelector(".navbar").style.backgroundColor="transparent";
    }
});
