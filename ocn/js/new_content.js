var new_array = {
    "color":[1,2,3,4,5],
    "name":["게임덱후들(유민상,김준현)","44층 지하던전","켠왕켜놩(켠김에왕까지-허준)","핑거게임(신동엽, 장도연)","플레이어2 (이수근,이진호, 이용진,이이경, 이진호, 정혁, 황치열, 김동현)"]
}

var new_co = document.getElementById("new_co");
var new_li = "";
var new_span = "";
var new_span2 = "";
    new_array.color.forEach(function(aa,bb,cc){
            new_li = document.createElement("li");
            new_li.setAttribute("title",new_array.name[bb]);
            new_co.append(new_li);
            new_span = document.createElement("span");
            new_span2 = document.createElement("span");
            new_span.setAttribute("onmouseenter","new1('"+aa+"')");
            new_span2.setAttribute("onmouseleave","new2('"+aa+"')");
            new_span.setAttribute("id","newa"+aa);
            new_span2.setAttribute("id","newb"+aa);
            new_span.innerHTML = "<img src='./contents/mini"+aa+"-black.png'>"
            new_li.append(new_span);
            new_span2.innerHTML = "<img src='./contents/mini"+aa+"-color.png'>"
            new_li.append(new_span2);
            //console.log(aa);
    });

    function new1(aaa){
        document.getElementById("newa"+aaa).style.display = "none";
        document.getElementById("newb"+aaa).style.display = "block";
    }
    function new2(aaa){
        document.getElementById("newa"+aaa).style.display = "block";
        document.getElementById("newb"+aaa).style.display = "none";
    }

