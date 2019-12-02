function sumCubes(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum = sum += i * i * i;
  }
  console.log(sum);
  return sum;
}

sumCubes(2);
