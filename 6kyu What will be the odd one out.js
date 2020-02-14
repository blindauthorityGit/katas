function oddOneOut(str) {
  let arr = str.split("");
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.filter(e => e === arr[i]).length === 1) {
      res.push(arr[i]);
    }
    console.log(arr.filter(e => e === arr[i]).length);
  }
  console.log(res);
  return res;
}

oddOneOut("Codewars");
