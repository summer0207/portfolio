$(function(){
    $("#menu_join").click(function(){
        $(".join_box").css({
            "display":"block"
        });
        $(".menu_css").animate({
         
                "right":"100%"
              
                
        
           
        
        })
    });
    $("#join_close").click(function(){
        $(".join_box").css({
            "display":"none"
        });
    });
    if($("#join_check1").checked==true){
        $("#join_check2").checked = true;
        $("#join_check3").checked = true;
        $("#join_check4").checked = true;
    }

    
    $("#f").submit(function(){
        return submit();
        
    })
})