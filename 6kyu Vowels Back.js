function vowelBack(s) {
  let arr = s.split("");
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "a" || arr[i] == "i" || arr[i] == "u") {
      let pos = alphabet.indexOf(arr[i]);
      let sum = pos - 5;
      if (sum < 0) {
        sum = 26 + (pos - 5);
      }
      if (
        alphabet[sum] == "c" ||
        alphabet[sum] == "o" ||
        alphabet[sum] == "d" ||
        alphabet[sum] == "e"
      ) {
        res.push(arr[i]);
      } else {
        res.push(alphabet[sum]);
      }
    } else if (arr[i] == "e") {
      let pos = alphabet.indexOf(arr[i]);
      let sum = pos - 4;
      console.log(alphabet[sum]);
      if (
        alphabet[sum] == "c" ||
        alphabet[sum] == "o" ||
        alphabet[sum] == "d" ||
        alphabet[sum] == "e"
      ) {
        sum = arr[i];
      }
      res.push(alphabet[sum]);
    } else if (arr[i] == "c" || arr[i] == "o") {
      let pos = alphabet.indexOf(arr[i]);
      let sum = pos - 1;
      console.log(alphabet[sum]);
      if (
        alphabet[sum] == "c" ||
        alphabet[sum] == "o" ||
        alphabet[sum] == "d" ||
        alphabet[sum] == "e"
      ) {
        sum = arr[i];
      }
      res.push(alphabet[sum]);
    } else if (arr[i] == "d") {
      let pos = alphabet.indexOf(arr[i]);
      let sum = pos - 3;
      console.log(alphabet[sum]);
      if (
        alphabet[sum] == "c" ||
        alphabet[sum] == "o" ||
        alphabet[sum] == "d" ||
        alphabet[sum] == "e"
      ) {
        sum = arr[i];
      }
      res.push(alphabet[sum]);
    } else {
      let pos = alphabet.indexOf(arr[i]);
      let sum = pos + 9;
      if (sum > 25) {
        sum = sum - 26;
        console.log(alphabet[sum]);
        if (
          alphabet[sum] == "c" ||
          alphabet[sum] == "o" ||
          alphabet[sum] == "d" ||
          alphabet[sum] == "e"
        ) {
          res.push(arr[i]);
        } else {
          res.push(alphabet[sum]);
        }
      }
    }
  }
  console.log(res.join("").length);
  console.log(s.length);
  return res.join("");
}

vowelBack("abcdefghijklmnopqrstuvwxyz");
