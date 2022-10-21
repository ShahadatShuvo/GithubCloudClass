let btn = document.getElementById("btn");

function myClick() {
  let text = document.getElementById("text").value;
  // text = "yo yo [100]".
  console.log(text);
}

btn.addEventListener("click", myClick);
