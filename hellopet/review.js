$(function(){

    $.ajax({
        url:"./json/review.json", 
        cache:false,        
        type:"GET",         
        dataType:"JSON",     
        success:function(rdata){    
            $.fn.review(rdata);
        },
        error:function(){ 
            console.log("통신 오류");
        }
    });
    $.fn.review = function(rdata){
        $.each(rdata,function(a1,a2){
            $("#review_ul").append("<li>"+a2[0]+"</li>")
            $("#review_ul").append("<li>"+a2[1]+"</li>")
            $("#review_ul").append("<li>"+a2[2]+"</li>")
            $("#review_ul").append("<li>"+a2[3]+"</li>")
            $("#review_ul").append("<li>"+a2[4]+"</li>")
        });
    }
    var timer = "";
    $.fn.rbanner = function(){
        clearTimeout(timer);
        $("#review_ul").stop().animate({
            "top":-40+"px"
        },500,function(){
            copy = $("#review_ul > li").eq(0).clone();
            $("#review_ul > li").eq(0).remove();
            $("#review_ul").append(copy);
            $("#review_ul").css({
                "top":"0px"
            });
        });
        
        timer = setTimeout($.fn.rbanner,5000);
    };
    timer = setTimeout($.fn.rbanner,5000);


});