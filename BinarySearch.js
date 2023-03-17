let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid;
  let asc;
  if (arr[start] < arr[end]) {
    asc = true;
  } else {
    asc = false;
  }
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return "Data found at " + mid;
    } else if (asc) {
      if (arr[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else {
      if (arr[mid] > target) {
        start = mid - 1;
      } else {
        end = mid + 1;
      }
    }
  }
  return -1;
}

console.log(binarySearch(arr, 3));


