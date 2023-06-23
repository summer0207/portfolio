$(function(){
var data1;
    $.ajax({
        url:"./json/qanda.json", 
        cache:false,        
        type:"GET",         
        dataType:"JSON",     
        success:function(data){    
            data1 =data;
            $.fn.qanda(data);
        },
        error:function(){ 
            console.log("통신 오류");
        }
    })
    var html1="";
$.fn.qanda= function(data){

  
    $.each(data,function(a,b){
    
        html1+=`<li>`+data[a].q_subject+`" "`+data[a].q_date+`</li>`
    
    })
    $(".m_qna").html(html1);
}
var cnt=0;
$(".top_css>li").eq(0).click(function(){
    if(cnt==0){
    $(".menu_css").animate({
        "right":"10%"
     },500)

 
    $(".black_sreen").css({
        "background-color":"rgba(0,0,0,0.3)",
       
    })
 cnt++;
}

else if(cnt>0){
    $(".menu_css").animate({
        "right":"100%",
      
        

    },500)
    $(".black_sreen").css({
        "background-color":"white"
        
    })
    cnt=0;


}
})




})
    

