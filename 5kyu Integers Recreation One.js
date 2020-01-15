function listSquared(m, n) {
  let nums = [];
  let res = [];
  for (let i = m; i <= n; i++) {
    let sum = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        sum += j * j;
      }
    }
    if (Math.sqrt(sum) % 1 === 0) {
      nums.push(i, sum);
    }
  }
  for (let k = 0; k < nums.length; k += 2) {
    res.push(nums.slice(k, k + 2));
  }
  console.log(res);
  return res;
}
// your code

listSquared(1, 250);
