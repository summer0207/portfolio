var uri = window.location.search;
var checkbtn = "";  //아이디 중복체크 유/무

if(uri == ""){
    alert("올바른 접근이 아닙니다.");
    history.go(-1);
}
else{
    var agree2 = uri.split("&m_agree2=");  
    join.m_agree2.value = agree2[1];
    var agree1 = agree2[0].split("?m_agree1=");
    join.m_agree1.value = agree1[1];
}

//아이디 중복체크
function memberid_ck(){
    if(join.m_userid.value==""){
        alert("아이디를 입력하세요");
    }
    else{
        var sign;
        function ajax(){
            if(window.XMLHttpRequest){
                return new XMLHttpRequest();
            }
        }
        function postdata(){
            if(sign.readyState==XMLHttpRequest.DONE && sign.status==200){
               var call = this.response;
               if(call=="ok"){
                    alert("사용가능한 아이디 입니다.");
                    join.m_userid.readOnly = true;
                    checkbtn = "ok";
               }
               else if(call == "cancel"){
                    alert("해당 아이디는 사용하실 수 없습니다");
                    join.m_userid.value = "";
               }
               else{
                console.log("통신오류 발생!!");
               }
            }
        }
        sign = ajax();
        sign.onreadystatechange = postdata;
        sign.open("POST","./id_check.php",true);
        sign.setRequestHeader("content-type","application/x-www-form-urlencoded");
        sign.send("m_userid="+join.m_userid.value);
    }
}
//이메일 선택부분
function mail_input(m){
    //indexOf : -1 해당 없을 경우 그 외에 숫자는 해당 문자가 있음
    var m_usermail = join.m_usermail.value;
    var indexof = m_usermail.indexOf("@");
    var mselect = document.getElementById("mselect");
    
    if(m_usermail=="" ||m==""){
        join.m_usermail.focus();
        mselect.value="";
        join.m_usermail.value = "";
    }
    else{
        if(indexof==-1){
            join.m_usermail.value = m_usermail +"@" + mselect.value;
        }
        else{
            var sp = m_usermail.split("@")[0];
            join.m_usermail.value= sp + "@ " +mselect.value;
        }
    }
}


//회원가입 버튼
function member_fn(){

    const cknm = /[0-9]/g; 
    var ok2 = cknm.test(join.m_usernm.value);
    const ckemail = /^[a-zA-Z0-9+_-]+@[a-zA-z0-9.-]+\.[a-zA-Z0-9-.]+$/ig;
    var ok3 = ckemail.test(join.m_usermail.value);

    if(join.m_userid==""){
        alert("아이디를 입력하세요");
    }
    else if(join.m_userid.value.length <= 5){
        alert("아이디를 5자 이상 입력하세요");
    }
    else if(checkbtn==""){
        alert("아이디 중복체크를 하셔야 합니다.");
    }
    else if(join.m_userpw.value==""){
        alert("패스워드를 입력하세요.");
    }
    else if(join.m_userpw.value.length <= 6){
        alert("패스워드는 6자 이상입니다.");
    }
    else if(join.checkpw==""){
        alert("동일한 패스워드를 입력하세요");
    }
    else if(join.m_userpw.value != join.checkpw.value){
        alert("패스워드가 일치하지 않습니다.");
    }
    else if(join.m_usernm==""){
        alert("고객명을 입력하세요");
    }
    else if(ok2 == true){
        alert("올바른 이름을 입력하셔야 합니다.");
    }
    else if(join.m_usermail==""){
        alert("이메일을 입력하세요");
    }
    // else if(ok3 == true){
    //     alert("올바른 이메일을 입력하셔야 합니다.");
    // }
    else if(join.m_usertel==""){
        alert("연락처를 입력하세요");
    }
    // else if(join.m_usertel.value.length <=10){
    //     alert("올바른 연락처를 입력하세요");
    // }
    else if(join.m_post==""){
        alert("우편번호를 입력하세요");
    }
    else if(join.m_addr==""){
        alert("상세주소를 입력하세요");
    }
    else{
        join.submit();
    }
}

$(function(){
    $("#addpost").postcodifyPopUp();
});