function minMinMax(array) {
  let max = Math.max(...array);
  let min = Math.min(...array);
  let minmin = 0;
  let res = [];
  for (let i = min; i < max; i++) {
    if (!array.includes(i)) {
      minmin = i;
      break;
    }
  }
  res.push(min, minmin, max);
  return res;
}
