function narcissistic(value) {
  let arr = value.toString().split("");
  let pow = arr.map(x => Math.pow(x, arr.length));
  return pow.reduce((a, b) => a + b) === value;
}

narcissistic(371);
