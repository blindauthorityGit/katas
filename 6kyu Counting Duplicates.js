function duplicateCount(text) {
  let arr = text
    .toLowerCase()
    .split("")
    .sort();
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] == arr[i]) {
      res.push(arr[i]);
    }
  }
  console.log(res.filter((item, index) => res.indexOf(item) === index).length);
  return res.filter((item, index) => res.indexOf(item) === index).length;
}

duplicateCount("Indivisibilities");
