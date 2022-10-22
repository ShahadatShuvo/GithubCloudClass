let btn = document.getElementById("btn");

function generateResultedText(str, num) {
  let resStr = "";
  for (let i = 0; i < num; i++) {
    resStr += `${str} <br /> `;
    // First String" + " - " + "Second String" + " <br /> " + "Third String"
  }
  return resStr;
}

function makeSlice(str) {
  let idx1;
  let idx2;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "[" || str[i] === "(") {
      idx1 = i;
    }
    if (str[i] === "]" || str[i] === ")") {
      idx2 = i;
    }
  }
  let resStr = "";
  for (let i = 0; i < idx1; i++) {
    resStr += str[i];
  }
  for (let i = idx2 + 1; i < str.length; i++) {
    resStr += str[i];
  }
  return resStr;
}

function myClick() {
  let str = document.getElementById("text").value;

  // str = "yo yo [100]".
  console.log(text);
  let resStr = "";
  let flag = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "[" || str[i] === "(") {
      flag = 1;
      i++;
    }
    if (str[i] === "]" || str[i] === ")") {
      flag = 0;
    }
    if (flag === 1) {
      resStr += str[i];
    }
  }
  let num = Number(resStr); // 100

  let slicedStr = makeSlice(str);
  console.log(slicedStr);
  let generatedText = generateResultedText(slicedStr, num);
  console.log(generatedText);
  let result = document.getElementById("generatedTxt");
  result.innerHTML = generatedText;
}

btn.addEventListener("click", myClick);
