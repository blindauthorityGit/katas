// function longestConsec(strarr, k) {
//   if (k <= 0 || strarr.length === 0 || k > strarr.length) {
//     return "";
//   }
//   let len = strarr.map(x => x.length);
//   console.log(len);
//   console.log(Math.max(...len));
//   let res = [];
//   let sorter = strarr.sort((a, b) => b.length - a.length);
//   for (let i = 0; i < k; i++) {
//     res.push(sorter[i]);
//   }
//   console.log(res.join("").toString());
//   return res.join("").toString();
//   // your code
// }

longestConsec(
  [
    "ejjjjmmtthh",
    "zxxuueeg",
    "aanlljrrrxx",
    "dqqqaaabbb",
    "oocccffuucccjjjkkkjyyyeehh"
  ],
  2
);

function longestConsec(strarr, k) {
  let lS = 0;
  strarr.forEach(e => {
    if (e.length > lS) {
      lS = e.length;
    }
  });
  console.log(lS);

  let gesL;
  let i = 0;
  strarr.forEach(e => {
    if (e.length <= lS && i < k + 1) {
      i++;
      gesL = e.length;
    }
  });
  console.log(gesL);

  let foundShortest = false;
  let newArr = [];
  i = 0;
  strarr.forEach(e => {
    if (e.length >= gesL && i < k) {
      newArr.push(e);
      i++;
    }
  });
  console.log(newArr);
  return newArr.join("").toString();
}
