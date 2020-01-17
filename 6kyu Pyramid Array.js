function pyramid(n) {
  let res = [];
  for (let i = 1; i <= n; i++) {
    let temp = new Array(i);
    temp.fill(1);
    res.push(temp);
  }
  return res;
}

pyramid(6);
