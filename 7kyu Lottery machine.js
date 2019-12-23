function lottery(str) {
  let arr = str.split("");
  let res = [];
  arr.forEach(function(number) {
    if (number.match(/\d+/g)) {
      res.push(number);
    }
  });
  if (res.length === 0) {
    return "One more run!";
  }
  let filtered = res.filter(function(i, p) {
    return res.indexOf(i) == p;
  });
  return filtered.join("").toString("");
}

lottery("hPrBKWDH8yc6Lt5NQZWQ666");
