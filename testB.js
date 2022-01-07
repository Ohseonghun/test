var joinMS;
var id;
var pw;
var pw_re;
var user_name;
var email;

function check() {
  if (id.value.length < 6) {
      alert("글자 수를 확인하세요");
    } 
    else if (pw.value.length < 6) {
        alert("pw를 확인하세요");
    }
    else if (pw_re.value.length < 6){
        alert("pw_re를 확인하세요");
    }
    else if (user_name.value.length < 2){
        alert("닉네임을 확인하세요");
    }
    else if (email.value.length < 1){
        alert("이메일을 확인하세요");
    }
    else {
        alert("ddddd");
        joinMS();
  }
  return
}

function joinMS() {
  joinBox.innerHTML = "가입 완료!";
}

window.onload = function () {
    id = document.getElementById("id");
    pw = document.getElementById("pw");
    pw_re = document.getElementById("pw_re");
    user_name = document.getElementById("user_name");
    email = document.getElementById("email");
  joinBox = document.getElementById("joinBox");
};
