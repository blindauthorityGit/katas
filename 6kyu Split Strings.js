function solution(str) {
  let arr = str.split("");
  let res = [];
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i + 1] === undefined) {
      res.push(arr[i] + "_");
    } else {
      res.push(arr[i] + arr[i + 1]);
    }
  }
  return res;
}

solution("abc");
