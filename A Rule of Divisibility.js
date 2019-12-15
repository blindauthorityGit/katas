function geometricSequenceElements(a, r, n) {
  let number = a;
  let arr = [a];
  let multi = number * r;
  let res = [];

  for (let i = 0; i < n - 1; i++) {
    arr.push(arr[i] * r);
    console.log(arr[i]);
  }
  console.log(arr.join(", "));
  return arr.join(",");
}

geometricSequenceElements(2, 3, 5);
