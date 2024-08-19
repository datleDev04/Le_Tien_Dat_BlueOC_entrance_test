function sumOfTopTwoIntegers(arr) {
  if (arr.length < 2) {
      throw new Error("Array must contain at least two integers.");
  }
  const sortedArr = arr.sort((a, b) => b - a);
  return sortedArr[0] + sortedArr[1];
}

// Test cases
console.log(sumOfTopTwoIntegers([1, 4, 2, 3, 5])); // Output: 9
console.log(sumOfTopTwoIntegers([10, 20, 30, 40])); // Output: 70
console.log(sumOfTopTwoIntegers([-10, -20, -30, -5])); // Output: -15