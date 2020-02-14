longestPalindrome = function(s) {
  let arr = s.split("");
  let arrCopy = [...arr].reverse();
  let count = 0;
  console.log(arr);
  console.log(arrCopy);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arrCopy[i]) {
      count++;
    }
  }
  console.log(count);
  return count;
};

longestPalindrome("baablkj12345432133d");
