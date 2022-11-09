// Merge Sort START
function mergeSort (arr){
  if(arr.length < 2) return arr;

  const midIndex = Math.floor(arr.length / 2);
  const leftPart = mergeSort(arr.slice(0, midIndex));
  const rightPart = mergeSort(arr.slice(midIndex));

  return merge(leftPart,rightPart)
}

function merge (leftPart,rightPart) {
  let resultArr = [];
  while(leftPart.length > 0 && rightPart.length > 0) {
    resultArr.push(leftPart[0] < rightPart[0] ? leftPart.shift() : rightPart.shift());
  }
  if(leftPart.length > 0) resultArr = resultArr.concat(leftPart);
  if(rightPart.length > 0) resultArr = resultArr.concat(rightPart);
  return resultArr;
}
// Merge Sort END


// Binary Search Function START
function binarySearch(arr, n) {
  count++;
  if(arr.length < 2) return console.log(count + " kerede buldum");

  let midIndex = parseInt(arr.length / 2)

  if(n < arr[midIndex]){
    binarySearch(arr.slice(0, midIndex),n)
  }else{
    binarySearch(arr.slice(midIndex),n)
  }
}
// Binary Search Function END


const arr = [7, 5, 1, 8, 3, 6, 0, 9, 4, 2];
const sortedArray = mergeSort(arr);
console.log(sortedArray);
let count = 0
binarySearch(sortedArray,3);
