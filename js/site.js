$(function(){
  $(window).on("load resize",function(){
        var h=window.innerHeight||document.body.clientHeight||document.documentElement.clientHeight;
        $(".site").css("height",h);
    });
});