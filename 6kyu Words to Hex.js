function wordsToHex(words) {
  let arr = words.split(" ");
  let res = [];
  let resTwo = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= 2; j++) {
      if (arr[i][j] !== undefined && j !== 3) {
        res.push(arr[i][j].charCodeAt(0).toString(16));
      } else if (arr[i][j] === undefined) {
        res.push("00");
      }
    }
  }

  for (let k = 0; k < res.length; k += 3) {
    resTwo.push("#" + res[k] + res[k + 1] + res[k + 2]);
  }

  return resTwo;
}
wordsToHex("Hello, my name is Gary and I like cheese");
