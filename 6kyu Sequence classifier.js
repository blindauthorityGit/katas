function sequenceClassifier(arr) {
  if (arr.every(e => e === arr[0])) {
    return 5;
  } else if (arr.every((number, i) => i === 0 || arr[i - 1] < number)) {
    return 1;
  } else if (
    arr.every(
      (number, i) => i === 0 || arr[i - 1] < number || arr[i - 1] === number
    )
  ) {
    return 2;
  } else if (arr.every((number, i) => i === 0 || arr[i - 1] > number)) {
    return 3;
  } else if (
    arr.every(
      (number, i) => i === 0 || arr[i - 1] > number || arr[i - 1] === number
    )
  ) {
    return 4;
  } else {
    return 0;
  }
}
