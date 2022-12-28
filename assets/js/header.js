$(window).scroll(function(){
    if($(this).scrollTop() == 0){
        $("header").removeClass("scroll");
        $("#header-logo a img").attr("src","assets/img/logo-white.png");
        if($(window).width() <= 768){
            $("#header-menu").slideUp();
        }
    }
    else{
        $("header").addClass("scroll");
        $("#header-logo a img").attr("src","assets/img/logo.png");
    }
    if($(window).width() <= 768){
        $("#header-menu").slideUp();
    }
});

$("#header-bar i").click(function(){
    $("#header-logo a img").attr("src","assets/img/logo.png");
    $("header").addClass("scroll");
    $("#header-menu").slideToggle();
});

$("#header-menu nav ul li a").click(function(){
    if($(window).width() <= 768){
        $("#header-menu").slideUp();
    }
});