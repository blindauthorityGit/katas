function findShort(s) {
  let arr = s.split(" ");
  let res = [];
  arr.forEach(function(x) {
    res.push(x.length);
  });
  return res.sort((a, b) => a - b)[0];
}
