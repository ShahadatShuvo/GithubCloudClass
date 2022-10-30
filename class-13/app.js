let arr = [1, 2, 3, 4, 5];

// [1*1, 2*2, 3*3, 4*4, 5*5] = [1,4,9,16,25]
// [1*2, 2*2, 3*2, 4*2, 5*2] = [1,4,6,8,10]
// password

// [1+1, 2+2, 3+3, 4+4, 5+5] = [2,4,6,8,10]

function summation(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + arr[i];
  }
  console.log(arr);
  return arr;
}

console.log(summation(arr));
