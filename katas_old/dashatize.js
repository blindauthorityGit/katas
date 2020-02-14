var encryptThis = function(text) {
  let arr = text.split(" ");
  console.log(arr);
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    let arrNu = arr[i].split("");
    arrNu[0] = arrNu[0].charCodeAt(0);
    let tempChar = arrNu[1];
    arrNu[1] = arrNu[arrNu.length - 1];
    arrNu[arrNu.length - 1] = tempChar;
    res.push(arrNu.join(""));
    console.log(arrNu.join(""));
  }

  console.log(res.toString().replace(/,/g, " "));
  return res.toString().replace(/,/g, " ");
};

encryptThis("A wise old owl lived in an oak");
