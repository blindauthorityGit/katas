function sumArray(array) {
  if (array === null || array.length === 1) {
    return 0;
  }
  let sorted = array.sort((a, b) => a - b);
  sorted.shift();
  sorted.pop();
  if (sorted.length <= 1) {
    return 0;
  } else {
    return sorted.reduce((a, b) => a + b);
  }
}
