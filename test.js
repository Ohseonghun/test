var i;
var p;
var id;
var pw;
var loginBox;

function login() {
  if (id.value == "cat" && pw.value == "1") {
    alert("성공");
    loginMS();
  } else {
    alert("실패");
  }
}

function loginMS() {
  loginBox.innerHTML = id.value + "회원님 반갑습니다";
}

window.onload = function () {
  id = document.getElementById("id");
  pw = document.getElementById("pw");
  loginBox = document.getElementById("loginBox");
};
