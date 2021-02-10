$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll >= 350){
        document.querySelector(".navbar").style.backgroundColor="rgb(218, 218, 65)";
    }
    else{
        document.querySelector(".navbar").style.backgroundColor="transparent";
    }
});
$(".nav-item").click(function(){
        var target = $(this.hash);
        target = target.length ? target : $('(name=' + this.hash.slice(1) + ')');
        if(target.length){
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 3000);
            return false
        }
});