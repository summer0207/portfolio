$(function(){	
    var sum_data; 	
        
    $.ajax({	
    url:"./json/new_pet.json", 
    cache:false, 	
    type:"GET", 	
    dataType:"json", 
    success:function(sum_data){ 	
    $.fn.summber_best(sum_data);	
    },	
    error:function(){ 	
    console.log("통신오류");	
    }	
    });	
        
    $.fn.summber_best = function(sum_data){	
    console.log(sum_data);	
    $.each(sum_data,function(a,b){
        //console.log(sum_data[a].pet_part);
        if(sum_data[a].pet_part == "dog"){
            $(".new_div").append("<ul class='dog'><li><img src='"+sum_data[a].pet_img+"'></li><li>"+sum_data[a].pet_title+"</li></ul>")
        }
    });
    $(".sum_cat").click(function(){
        $(".dog").css({
            "display":"none"
        });
        $.each(sum_data,function(a,b){
            if(sum_data[a].pet_part == "cat"){
                $(".new_div").append("<ul class='cat'><li><img src='"+sum_data[a].pet_img+"'></li><li>"+sum_data[a].pet_title+"</li></ul>")
            }
        });
        $(".sum_new").css({
            "height":"350px"
        });
        $(".new_div").css({
            "height":"280px"
        });
        $(".sum_cat").css({
            "border-bottom":"0px"
        });
        $(".sum_dog").css({
            "border-bottom":"1px solid black"
        });
    });
    $(".sum_dog").click(function(){
        $(".cat").css({
            "display":"none"
        });        
        $(".dog").css({
            "display":"block"
        });
        $(".sum_new").css({
            "height":"200px"
        });
        $(".new_div").css({
            "height":"150px"
        });    
        $(".sum_dog").css({
            "border-bottom":"0px"
        });
        $(".sum_cat").css({
            "border-bottom":"1px solid black"
        });
    });
    var div_wid = $(".new_div").width();
    //console.log(div_wid);
    var sumwid =  $(".sum_dog").width();
    var sumwid2 =  $(".sum_cat").width();
    $(".midli").css({
        "width": div_wid - sumwid -sumwid2 -2  +"px"
    })



    }	
    });	
    