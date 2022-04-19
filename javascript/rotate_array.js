// while K > 0
// array pop - remove last element
// array unshift - add to beginning of array
//  return that array

function rotateArray(arr, k) {
  // type your code here
  if (arr === []) {
    return arr;
  } 

  while (k >= 1) {
    let lastChar = arr.pop();
    arr.unshift(lastChar);
    k--;
  }

  return arr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));
}

module.exports = rotateArray;

// Please add your pseudocode to this file
// And a written explanation of your solution
