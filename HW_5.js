//1.
function isIsogram (str) {
  let newStr = str.toLowerCase();
  let res = true;
  const space = ' ';
  for (let i = 0; i < newStr.length; i++){
    for (let j = i + 1; j < newStr.length; j++){
      if(newStr[i] === space) continue;
      else if (newStr[i] === newStr[j]) res = false;
    }
  }
  return res;
}

console.log(isIsogram('The isogramm '))

//2.
function allDigitsAreOdd(num) {
  let result = true;
  while(num){
    let lastDigit = num % 10;
    if(lastDigit % 2 === 0) result = false;
    num = (num - lastDigit) / 10;
  }
  return result;
}

console.log(allDigitsAreOdd(553791))

//2. by recursion (doesn't work :( )
// function allDigitsAreOddR(num) {
//   let lastDigit = num % 10;
//   let result = true;
//   while(num){
//   if(lastDigit % 2 === 0) result = false;
//   allDigitsAreOddR((num - lastDigit) / 10);
//   }
//   return result;
// }

// console.log(allDigitsAreOddR(1573951))

//3.
function flattenAray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++){
    if (!Array.isArray(arr[i])) result.push(arr[i]);
    else result = concatArr(result, flattenAray(arr[i]));
  }
  return result;
}

function concatArr(arr1, arr2){
  return arr1.concat(arr2)
}


console.log(flattenAray([1, [3, 4, [1, 2]], 10]))

//4.
function sumOfDigits(num){
  let sum = 0;
  while (num) {
    let lastDigit = num % 10;
    sum += lastDigit;
    num = (num - lastDigit) / 10; 
  }
  if (Math.floor(sum / 10) === 0) return sum;
  else return sumOfDigits(sum) 
}

console.log (sumOfDigits(157))

//5. Doesn't work properly
function binarySearch (arr, el) {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  let middleIndex = Math.floor((startIndex + endIndex) / 2);
  if (el === arr[middleIndex]) return middleIndex;
     else if (el > arr[middleIndex]) return binarySearch(arr.splice(middleIndex, endIndex), el)
     else return binarySearch(arr.splice(startIndex, middleIndex), el)
  
}

console.log (binarySearch([1, 3, 5, 7, 11, 13, 15, 28, 34, 36, 39, 41], 34))

//6.
function getAllPossibleSubsets(arr, N) {
  let subsets = [];
  while (arr.length) {
    let subset = [ arr[0] ];
    for (let i = 1; i < arr.length; i++) {    
      subset.push(arr[i]);
      if (i + 1 >= N) {
        subsets.push(subset);
        subset = [ arr[0] ];
      }
    }
    arr.shift();
  }
  return subsets;
}

console.log('RES', getAllPossibleSubsets([1, 2, 3, 4], 2));