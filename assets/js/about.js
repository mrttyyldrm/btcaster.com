$(".skill-bar").each(function(){
    $(this).children("span").css("width",$(this).children("span").attr("ratio") + "%");
    $(this).children("p").css("left",$(this).children("span").attr("ratio") + "%");
    $(this).children("p").html($(this).children("span").attr("ratio") + "%");
});