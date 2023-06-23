var on_data;
var on_array;
function win(){
    if(window.XMLHttpRequest){
        return new XMLHttpRequest();
    }
}
function file(){
    if(on_data.readyState==XMLHttpRequest.DONE && on_data.status==200){
        no_array = JSON.parse(this.response);
        on_abc(JSON.parse(this.response));
    }
}
on_data = win();
on_data.onreadystatechange = file;
on_data.open("get","./json/new_program.json",true);
on_data.send();

var on_air1 = "";
var on_air2 = "";


function on_abc(on_data){
    //console.log(on_data[0]["new_thumb"]);


    on_data.forEach(function(a,b,c){
        //console.log(a["new_thumb"]);
        if (b <= 7) {

            on_air1 += "<li id='aa"+b+"' title='"+a["new_pg"]+"'><img src='" + a["new_thumb"] + "'></li>"

            document.getElementById("onair_list").innerHTML = on_air1;
        } else
         if (b > 7) {

            on_air2 += "<li id='aa"+b+"'title='"+a["new_pg"]+"'><img src='" + a["new_thumb"] + "'></li>"

            document.getElementById("onair_list2").innerHTML = on_air2;

        }
        //console.log(b);

    });


    
}

//사이드배너
function adbanner(){
    window.open("https://biz.skbroadband.com/","100px 100px");
}

$(function(){
    $("#onair_btn").click(function(){
        $(".air").fadeToggle(800);
    });
});