// function wave(str) {
//   let res = [];
//   let arr = str.split("");
//   let len = str.split("").length;
//   console.log(len);
//   for (let i = 0; i < len; i++) {
//     if (arr[i] !== " " && arr[i] !== undefined) {
//       arr[i] = arr[i].toUpperCase();
//       if (arr[i - 1] !== undefined) {
//         arr[i - 1] = arr[i - 1].toLowerCase();
//       }
//     }
//     res.push(arr.join(""));
//   }

//   console.log(res);
// }

// wave("Two words");
function wave() {
  const str = wave.arguments[0].toLowerCase();
  const arr = [];
  for (let i = 0; i < str.length; i += 1) {
    if (str.charAt(i) !== " ") {
      const cap = str.charAt(i).toUpperCase();
      const front = str.substr(0, i);
      const back = str.slice(i + 1);
      arr.push(front + cap + back);
    }
  }
  return arr;
}
