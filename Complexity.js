// 1 < logn < n^1/2 < n < nlogn < n^2 < n^3 < .... 2n < 3^n .... < n^n

// ekhane time complexity er function comparison dekhano hoyeche soto theke boro.

function findValue(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if(arr[i][j] === target) {
         return arr[i][j];
      }
    }
  }
}

const array = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];
const target = 2;

findValue(array, target);
