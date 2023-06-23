var data;
var array;
function win(){
    if(window.XMLHttpRequest){
        return new XMLHttpRequest();
    }
}
function file(){
    if(data.readyState==XMLHttpRequest.DONE && data.status==200){
        array = JSON.parse(this.response);
        abc(JSON.parse(this.response));
    }
}
data = win();
data.onreadystatechange = file;
data.open("get","./json/menu.json",true);
data.send();

function abc(data){
   //console.log(data);
   var html_li = "";
   var html_ol = "";
   var html_li2 = "";
   var list = document.getElementById("list");
   data.forEach(function(a,b,c){
    //console.log(b);
    html_li = document.createElement("li");
    html_li.className = "list"+[b];
    html_li.append(data[b]["main_menu"]);
    list.append(html_li);
    html_ol = document.createElement("ol")
    html_ol.className = "category_ol";

        data[b]["menu_list"].forEach(function(aa,bb,cc){
        html_li2 = document.createElement("li");
        html_li2.innerHTML = "<a href='"+data[b].menu_link[bb]+"'>"+aa+"</a>";
        html_ol.append(html_li2);
        html_li.append(html_ol);
        });
   });
}
$(function(){
   $(".list0").mouseenter(function(){
    $(".list0 > ol").stop().slideDown(500);
   });
   $(".list0").mouseleave(function(){
    $(".list0 > ol").stop().slideUp(500);
   });
   $(".list1").mouseenter(function(){
    $(".list1 > ol").stop().slideDown(500);
   });
   $(".list1").mouseleave(function(){
    $(".list1 > ol").stop().slideUp(500);
   });
   $(".list2").mouseenter(function(){
    $(".list2 > ol").stop().slideDown(500);
   });
   $(".list2").mouseleave(function(){
    $(".list2 > ol").stop().slideUp(500);
   });
   $(".list3").mouseenter(function(){
    $(".list3 > ol").stop().slideDown(500);
   });
   $(".list3").mouseleave(function(){
    $(".list3 > ol").stop().slideUp(500);
   });
   $(".list4").mouseenter(function(){
    $(".list4 > ol").stop().slideDown(500);
   });
   $(".list4").mouseleave(function(){
    $(".list4 > ol").stop().slideUp(500);
   });
});

function ocn_logo(){
    location.href="https://ocn.cjenm.com/ko/";
}