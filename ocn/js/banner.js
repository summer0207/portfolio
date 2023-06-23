$(function(){
    var data;
    $.ajax({
        url:"./json/banner.json",
        cache:false,
        type:"GET",
        dataType:"JSON",
        success:function(data){
            $.fn.array(data);
        },
        error:function(){
            console.log("통신오류");
        }
    });
    $.fn.array = function(data){
        //console.log(data["banners"]);
        $.each(data["banners"],function(a,b){
            //console.log(a);
            if(b[3]=="yes"){
                html = `<li class="b`+a+`"><a href="`+b[1]+`
                "><img src="`+b[0]+`
                "></a></li>`
                $("#banners").append(html);
                $("#disc").append("<li></li>");
            };

        });
        var ea = $("#banners>li").length;
        var banner_width = $("#banners>li").width();
        //console.log(banner_width);
        banner_width * ea;
        $("#banners").css({
            "width" : banner_width * ea+"px"
        });

        var w = 0;
        var node = 0;
        var timer = "";
        var m = 0;

        $.fn.banner = function(){
            clearTimeout(timer);
            if(m==0){
            $("#banners").stop().animate({
                "left":-banner_width + "px"
            },800,function(){
                var copy = $("#banners>li").eq(0).clone();
                $("#banners>li").eq(0).remove();
                $("#banners").append(copy);
                $("#banners").css({
                    "left":0
                });
                w++;
                $("#disc > li").css({
                    "background-color":"rgba(255, 255, 255, 0.5)"
                });
                if(w >=ea){
                    w = 0;
                };
                $("#disc > li").eq(w).css({
                    "background-color":"white"
                });
            });
            timer = setTimeout($.fn.banner,8000);
            }
            else if(m==1){
                m = 0;
                timer = setTimeout($.fn.banner,8000);
            }
        }
        timer = setTimeout($.fn.banner,8000);

        $("#banners").bind({
            "mouseenter":function(){
                clearTimeout(timer);
            },
            "mouseleave":function(){
                m = 1;
                $.fn.banner();
            }
        });

        //디스크 핸들링
        $("#disc > li").bind({
            "click":function(){
                clearTimeout(timer);
                node = $(this).index();
                //console.log(node);
                $("#disc > li").css({
                    "background-color":"rgba(255, 255, 255, 0.5)"
                });
                $("#disc > li").eq(node).css({
                    "background-color":"white"
                });
                $.fn.mybanner(node);
            },
            "mouseleave":function(){
                timer = setTimeout($.fn.banner,8000);
            }
        });

        //디스크 클릭시
        $.fn.mybanner = function(i){
            var classname =".b"+i;
            var nos = Math.ceil($("#banners >"+classname).offset().left);
            var pnos = Math.ceil($("#banners").offset().left);
            var total_left = nos - pnos;
            var now_node = Number(String(total_left).substr(0,1));  
            $("#banners").stop().animate({
                "left":-total_left+"px"
            },800,function(){
                var z = 0;
                while(z < now_node){
                var cp = $("#banners > li").eq(0).clone();
                $("#banners > li").eq(0).remove();
                $("#banners").append(cp);
                z++;
                }  
                $("#banners").css({
                    "left":"0px"
                });
            });
        }

        //이전, 다음 버튼
        $("#prev").click(function(){
            node--;
            var last = ea - 1;
            if(node < 0){
                node = last;
            }
            
            var z = $("#banners>li").eq(last).clone();
            $("#banners>li").eq(last).remove();
            $("#banners").prepend(z);
            $("#banners").css({
                "left":-banner_width+"px"
            });
            $("#banners").stop().animate({
                "left":"0px"
            },800);
            
            $("#disc > li").css({
                "background-color":"rgba(255, 255, 255, 0.5)"
            });
            $("#disc > li").eq(node).css({
                "background-color":"white"
            });
        });

        $("#next").click(function(){
            node++;
            if(node >= ea){
                node = 0;
            }
            $("#banners").stop().animate({
                "left":-banner_width+"px"
            },800,function(){
                var z = $("#banners>li").eq(0).clone();
                $("#banners>li").eq(0).remove();
                $("#banners").append(z);
                $("#banners").css({
                    "left":"0px"
                });
            });
            $("#disc > li").css({
                "background-color":"rgba(255, 255, 255, 0.5)"
            });
            $("#disc > li").eq(node).css({
                "background-color":"white"
            });
        });
        
    }
});

