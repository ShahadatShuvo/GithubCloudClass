let btn = document.getElementById("btn");
let showData = document.getElementById("showData");
let studentsArr = [];

function getData(event) {
  event.preventDefault();
  let fullName = document.getElementById("fullName").value;
  let roll = document.getElementById("roll").value;
  let address = document.getElementById("address").value;
  let mobile = document.getElementById("mobile").value;
  let bloodGroup = document.getElementById("bloodGroup").value;
  let newStudentObj = {
    fullName: fullName,
    roll: roll,
    address: address,
    mobile: mobile,
    bloodGroup: bloodGroup,
  };
  studentsArr.push(newStudentObj);
  console.log(studentsArr);
}

btn.addEventListener("click", getData);
