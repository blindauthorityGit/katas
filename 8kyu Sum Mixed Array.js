function sumMix(x) {
  return x.map(num => parseInt(num, 10)).reduce((a, b) => a + b);
}
