$(window).scroll(function(){
    if($(this).scrollTop() == 0){
        $("header").removeClass("scroll");
    }
    else{
        $("header").addClass("scroll");
    }
});