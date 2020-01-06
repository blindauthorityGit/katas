function getMiddle(s) {
  let arr = s.split("");
  let res = [];
  if (s.length % 2 === 0) {
    res.push(arr[arr.length / 2 - 1], arr[arr.length / 2]);
  } else {
    res.push(arr[(arr.length - 1) / 2]);
  }
  console.log(res.join(""));
  return res.join("");
}

getMiddle("testefeffefe");
