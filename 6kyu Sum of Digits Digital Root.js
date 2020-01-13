function digital_root(n) {
  let arr = n
    .toString(10)
    .split("")
    .map(x => parseInt(x));
  let sum = arr.reduce((a, b) => a + b);
  for (let i = 0; ; i++) {
    if (sum.toString(10).length === 1) {
      return sum;
    } else {
      sum = sum
        .toString(10)
        .split("")
        .map(x => parseInt(x))
        .reduce((a, b) => a + b);
    }
  }
}

digital_root(16);
