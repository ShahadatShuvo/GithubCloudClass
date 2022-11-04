let btnChange = document.getElementById("btnChange");
let body = document.getElementById("body");
let calculator = document.getElementById("calculator");
let flag = 0;

function changeMode() {
  if (flag === 0) {
    body.style.backgroundColor = "black";
    calculator.style.backgroundColor = "#38BDF8";
    btnChange.innerHTML = "White Mode";
    flag = 1;
  } else {
    location.reload();
  }
}
