function sequenceClassifier(arr) {
  if (arr.every(e => e === arr[0])) {
    console.log(5);
  }
  if (arr.every((number, i) => i === 0 || arr[i - 1] < number)) {
    console.log(1);
  }
}
//your code here

sequenceClassifier([3, 5, 8, 9, 14, 23]);
