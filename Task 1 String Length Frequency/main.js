function mostFrequentStringLengths(arr) {
  const lengthMap = {};

  arr.forEach(str => {
      const len = str.length;
      lengthMap[len] = (lengthMap[len] || 0) + 1;
  });

  const maxFrequency = Math.max(...Object.values(lengthMap));

  return arr.filter(str => str.length === parseInt(Object.keys(lengthMap).find(key => lengthMap[key] === maxFrequency)));
}

//test case
console.log(mostFrequentStringLengths(['aaa', 'a', 'sads', 'b'])) 
// Output: ['a', 'b']