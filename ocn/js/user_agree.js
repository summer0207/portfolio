var agree = function(z){
    var http = new XMLHttpRequest();
    http.open("GET",z,false);
    http.send();
    return http.response;
}


var agree_box = document.getElementById("agree_box");
agree_box.innerText = agree("./agree1.txt");
var agree_box2 = document.getElementById("agree_box2");
agree_box2.innerText = agree("./agree2.txt");


//전체동의체크
function all_agree(c){
    //var allagree = document.getElementById("allagree");
    var m_ea = fn.m_agree.length;
    console.log(m_ea);
    var aw = 0;
    while(aw < m_ea){
        fn.m_agree[aw].checked = c;
        aw++;
    }
}



//동의체크
function agree_btn(){
    if(fn.m_agree1.checked==false){
        alert("이용약관에 동의하세요");
    }
    else if(fn.m_agree2.checked==false){
        alert("개인정보 수집에 동의 하세요");
    }
    else{
        fn.submit();
    }
}
