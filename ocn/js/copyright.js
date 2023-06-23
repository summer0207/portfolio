var no_data;
var no_array;
function win(){
    if(window.XMLHttpRequest){
        return new XMLHttpRequest();
    }
}
function file(){
    if(no_data.readyState==XMLHttpRequest.DONE && no_data.status==200){
        no_array = JSON.parse(this.response);
        notice(JSON.parse(this.response));
    }
}
no_data = win();
no_data.onreadystatechange = file;
no_data.open("get","./json/notice.json",true);
no_data.send();



function notice(no_data){
    var notice = document.getElementById("notice");
    var not_li = "";
    console.log(data["notice"]);
    no_data["notice"].forEach(function(a,b,c){
        console.log(a[0]);
        not_li = document.createElement("li");
        not_li.append(a[0]);
        notice.append(not_li);
    });
}

$(function(){
    var no = 0;
    var node_co = $("#notice>li").length;
    var timer_co = ""
    $.fn.roll = function(){
        clearTimeout(timer_co);
        $("#notice").stop().animate({
            "top":"-45px"
        },800,function(){
            var copy = $("#notice>li").eq(0).clone();
            $("#notice>li").eq(0).remove();
            $("#notice").append(copy);
            $("#notice").css({
                "top":"0px"
            });
        });
        timer = setTimeout($.fn.roll,10000);
    };
    timer = setTimeout($.fn.roll,10000);


    $.ajax({
        url: "./json/pullmenu.json",
        cashe: false,
        type: "GET",
        dataType: "JSON",
        
        success: function (copy_data) {
            
            $.fn.brend(copy_data);
            
        },
        error: function () {
            console.log("통신오류")
        }
        
    });
    $.fn.brend = function(copy_data){
        //console.log(copy_data);
        var copy_li = "";
        var copy_li2 = "";

        $.each(copy_data[0]["brand"],function(a,b){
            console.log(b);
            copy_li = `<li>`+b+`</li>`
            $("#corp>ul").append(copy_li);
        });

        $.each(copy_data[0]["subsidi"],function(aa,bb){
            console.log(bb);
            copy_li2 = `<li>`+bb+`</li>`
            $("#corp2>ul").append(copy_li2);
        });

        $("#corp").click(function(){
            $("#corpul").slideToggle();
        });

        $("#corp2").click(function(){
            $("#corpul2").slideToggle();
        });
    }
});











//사업자 정보확인
function corp(no) {
    window.open("http://www.ftc.go.kr/bizCommPop.do?wrkr_no="+no,"","width=600 height=600");
}