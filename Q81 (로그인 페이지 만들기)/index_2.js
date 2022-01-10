var joinMS;
var id;
var pw;
var pw_re;
var user_name;
var email;
var birth_y;
var dirth_m;
var birth_d;
// var tel_1;
// var tel_2;
// var tal_3;
var sex;
var sexstring;

function check() {

  if (id.value.length < 0) {
    alert("사용할수 없는 아이디 입니다.");
  } else if (pw.value.length < 0) {
    alert("비밀번호를 확인하세요");
  } else if (pw_re.value.length < 0) {
    alert("확인 비밀번호가 틀립니다.");
  } else if (pw_re.value !== pw.value ) {
    alert("두 비밀번호가 틀립니다.");
  } else if (user_name.value.length < 0) {
    alert("닉네임을 확인하세요");
  } else if (email.value.length < 0) {
    alert("이메일을 확인하세요");
  } else {
    Zex();
    alert(
      +"가입 완료!\n"
      +"아이디: " + id.value + "\n"
      +"이름: " + user_name.value + "\n"
      +"생년월일: "+birth_y.value +"." +birth_m.value +"." +birth_d.value +"\n"
      +"이메일: " + email.value + "\n"
      +"성별: " + sexstring + "\n"
      +"전화번호: " + tel_1.value + "-" + tel_2.value + "-" + tel_3.value
    );
  }
  return;
}

function Zex() {
  for(var i=0; i<sex.length; i++) {
      if(sex[i].checked == true) {
          sexstring = sex[i].value;
      }
  }
}


window.onload = function () {
  id = document.getElementById("id");
  pw = document.getElementById("pw");
  pw_re = document.getElementById("pw_re");
  user_name = document.getElementById("user_name");
  email = document.getElementById("email");
  joinBox = document.getElementById("joinBox");
  birth_y = document.getElementById("birth_y");
  dirth_m = document.getElementById("dirth_m");
  birth_d = document.getElementById("birth_d");
  sex = document.getElementsByName("sex");
  tel_1 = document.getElementById("tel_1");
  tel_2 = document.getElementById("tel_2");
  tel_3 = document.getElementById("tel_3");
  
};
