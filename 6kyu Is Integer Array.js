function isIntArray(arr) {
  if (arr === null || arr === undefined || arr === "") {
    return false;
  }
  let res = [];
  for (let e in arr) {
    if (Number.isInteger(arr[e])) {
      res.push(arr[e]);
    }
  }

  if (res.length === arr.length) {
    return true;
  } else {
    return false;
  }
}
isIntArray(null);
