function findEvenIndex(arr) {
  let sumL = 0;
  let arrCopy = [...arr];
  let right = [];
  let left = [];
  let res = [];

  for (let j = 0; j < arr.length; j++) {
    if (arr[j - 1] === undefined) {
      left.push(0);
    } else {
      sumL += arr[j - 1];
      left.push(sumL);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] === undefined) {
      right.push(0);
      break;
    }
    arrCopy.shift();
    if (arr[i] !== undefined && arr[i] !== null) {
      right.push(arrCopy.reduce((a, c) => a + c));
    } else {
      right.push(0);
    }
  }

  for (let k = 0; k < left.length; k++) {
    for (let l = 0; l < right.length; l++) {
      if (left[k] === right[k]) {
        res.push(k);
        break;
      }
    }
  }

  if (res.length != 0) {
    return parseInt(res, 10);
  } else {
    return -1;
  }
}

findEvenIndex([1, 2, 3, 4, 3, 2, 1]);
