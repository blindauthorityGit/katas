function cleanString(s) {
  let arr = s.split("");
  let res = [];
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    if (arr[i + 1] === "#") {
      i += 1;
    } else if (arr[i] !== "#") {
      res.push(arr[i]);
    }
  }
  console.log(res);

  //   console.log(s.replace(/#/g, " "));
}

cleanString("abc#d##c");
