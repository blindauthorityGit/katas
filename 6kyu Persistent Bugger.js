function persistence(num) {
  let arr = num.toString().split("");
  let sum = arr.reduce((a, b) => a * b);
  for (let i = 0; ; i++) {
    if (sum.length === 1) {
      return i;
    } else {
      sum = sum
        .toString()
        .split("")
        .reduce((a, b) => a * b);
    }
  }
}

persistence(999);
