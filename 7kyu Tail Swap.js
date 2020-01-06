function tailSwap(arr) {
  let first = arr[0].split(":");
  let second = arr[1].split(":");
  let res = [first[0] + ":" + second[1], second[0] + ":" + first[1]];
  console.log(res);
  return res;
}

tailSwap(["abc:123", "cde:456"]);
