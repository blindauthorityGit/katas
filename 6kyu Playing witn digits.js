function digPow(n, p) {
  let arr = n.toString().split("");
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i], p + i);
  }
  for (let j = 0; ; j++) {
    if (n * j === sum) {
      return j;
    }
    if (n * j > sum) {
      return -1;
    }
  }
}

digPow(46288, 3);
