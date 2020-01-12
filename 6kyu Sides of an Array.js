function findEvenIndex(arr) {
  let sumL = [];
  let sumR = [];
  let arrCopy = [...arr];
  let right = [];

  console.log(arr);
  for (let i = 0; i < arr.length - 1; i++) {
    arrCopy.shift();
    if (arr[i] !== undefined) {
      console.log(arrCopy.reduce((a, c) => a + c));
      right.push(arrCopy.reduce((a, c) => a + c));
    }
  }
  console.log(right);
}

findEvenIndex([1, 2, 3, 4, 3, 2, 1]);
