let output = document.getElementById("output");
output.style.display = "none";

function onSubmit() {
  function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let computerChoose = randomRange(1, 5);
  let userChoose = Number(document.getElementById("value").value);
  let win = document.getElementById("win");
  let lost = document.getElementById("lost");
  let comPicked = document.getElementById("comPicked");
  let userPicked = document.getElementById("userPicked");
  comPicked.innerHTML = computerChoose;
  userPicked.innerHTML = userChoose;
  output.style.display = "block";
  if (computerChoose === userChoose) {
    // win
    win.style.display = "inline-block";
    lost.style.display = "none";
  } else {
    // lost
    lost.style.display = "inline-block";
    win.style.display = "none";
  }
}
