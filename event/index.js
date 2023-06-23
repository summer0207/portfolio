function corp(no){
    //공정거래위원회 api 서버와 동기화함
    window.open("http://www.ftc.go.kr/bizCommPop.do?wrkr_no="+no,"","width=600 height=600");
}

function btn(){

var event = document.getElementById("event");
var check_tel = number(event_tel.value);

    if(event_user.value == ""){
        alert("고객명을 입력하세요.")
    }
    else if(event_email.value == ""){
        alert("이메일을 입력하세요.")
    }
    else if(check_tel=="no"){
        alert("숫자만 입력하세요")
    }
    else if(event_tel.value == "" || event_tel.value.length<10){
        alert("전화번호를 입력하세요")
    }
    else if(event_number.value=="" || event_number.value.length<8){
        alert("쿠폰번호를 입력하세요.")
    }
    else if(event_check.checked == false){
        alert("이용약관에 동의해주세요.")
    }
    else{
        event.submit();
    }
}

function number(data) {
    var num = "";
    if(isNaN(data)==true){
        num = "no";
    }else{
        num = "yes";
    }
    return num;
}