function orderWeight(strng) {
  let arr = strng.split(" ");
  let pos = [];
  let posFin = [];
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = parseInt(arr[i]);

    pos.push(
      temp
        .toString()
        .split("")
        .map(Number)
        .reduce((a, b) => a + b)
    );
  }

  let copy = [...pos];

  console.log(arr, pos.join(" "));
  for (let j = 0; j < pos.length; j++) {
    let temp = copy.sort((a, b) => b - a).reverse()[j];
    console.log(pos.indexOf(temp));
    posFin.push(pos.indexOf(temp));
  }
  console.log(posFin);
  for (let k = 0; k < arr.length; k++) {
    res.push(arr[posFin[k]]);
  }
  console.log(res.join(" "));
  return res;
}

orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123");
