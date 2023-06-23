$(function(){
    var w=0;
    var timer="";
    var ea=$("#banner_ul>li").length;

    $.fn.banner=function(){
        clearTimeout(timer);
        $("#banner_ul>li").eq(w).fadeOut(1000);
        w++;
        if(w>=ea){
            w=0;
        }
        $("#banner_ul>li").eq(w).fadeIn(1000);
        timer=setTimeout($.fn.banner,5000);
    }
    timer=setTimeout($.fn.banner,5000);
});