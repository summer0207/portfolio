var data1;	
var array;	
function win(){	
if(window.XMLHttpRequest){	
return new XMLHttpRequest();	
}	
}	
function file(){	
if(data1.readyState==XMLHttpRequest.DONE && data1.status==200){	
array = JSON.parse(this.response);	
summer_best(JSON.parse(this.response));	
}	
}	
data1 = win();	
data1.onreadystatechange = file;	
data1.open("get","./json/best_product.json",true);	
data1.send();	

function summer_best(data1){
    console.log(data1["best_product"]);
    data1["best_product"].forEach(function(a,b,c){
        console.log(a);
        var sum_bestpr = document.getElementById("sum_bestpr");
        var html_div = document.createElement("div");
        var html_div2 = document.createElement("div");
        var html_ul = document.createElement("ul");
        var html_li = document.createElement("li");
        var html_li2 = document.createElement("li");
        var html_li3 = document.createElement("li");
        html_div2.style.backgroundImage = "url('"+data1["best_product"][b]["product_img"]+"')";
        html_div.className = "sum_allbest";
        html_div2.className = "sum_bestimg";
        html_div.append(html_div2);
        html_li.innerHTML = data1["best_product"][b]["product_nm"];
        html_li2.innerHTML = data1["best_product"][b]["product_sample"];
        html_li3.innerHTML = data1["best_product"][b]["product_money"];
        html_ul.append(html_li);
        html_ul.append(html_li2);
        html_ul.append(html_li3);
        html_div.append(html_ul);
        sum_bestpr.append(html_div);
    });
}


