function longestPalindrome(str) {
  let alphanum = str.replace(/[^0-9A-Z]+/gi, "").toLowerCase();
  console.log(alphanum);
  let arr = alphanum.split("").sort();
  let res = [];
  let count = (input, arr) => arr.filter(x => x === input).length;
  let counter = 0;
  console.log(count("c", arr));
  arr = arr.filter((item, index) => arr.indexOf(item) !== index);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      continue;
    } else {
      res.push(arr[i]);
    }
  }
  for (let j = 0; j < res.length; j++) {
    console.log(j);
    if (count(res[j], arr) % 2 === 0) {
      counter += count(res[j], arr);
    } else {
      counter += count(res[j], arr) - 1;
    }
  }
  console.log(res);
  console.log(counter);
}

longestPalindrome("xyz__a_/b0110//a_zyx");
