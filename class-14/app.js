let str = "Internet made our life more easyer.";

// "Internet made our life more easyer."
// p1 = "Internet " + M + p2 = "ade our life more easyer."
// str = "Internet Made Our Life more easyer."

// makeUpperCase

function makeUpperCase(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      let portion1 = str.substr(0, i + 1);
      let portion2 = str.substr(i + 2, str.length);
      let temp = str[i + 1].toUpperCase();
      str = portion1 + temp + portion2;
    }
  }
  return str;
}

let result = makeUpperCase(str);

console.log(result);
