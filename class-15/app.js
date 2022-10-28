// clean code

let startPoint = 50;
let endPoint = 100;

// addition
function addition(sp, ep) {
  let sum = 0;
  for (let i = sp; i <= ep; i++) {
    sum += i;
  }
  return sum;
}
// average
function average(sum, number) {
  return sum / number;
}

// print number between a range
function printrange(startRange, endRange) {
  for (let i = startRange; i <= endRange; i++) {
    console.log(i);
  }
}

let sum = addition(startPoint, endPoint);
console.log(sum);

let avg = average(sum, endPoint - startPoint + 1);
console.log(avg);

printrange(20, 50);
