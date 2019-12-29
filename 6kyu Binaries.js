function code(strng) {
  let arr = strng.split("");
  let resOne = [];
  arr.forEach(e => {
    let f = parseInt(e, 10);
    let bin = (f >>> 0).toString(2);
    resOne.push(bin);
  });

  console.log(resOne);
  // your code
}
function decode(str) {
  // your code
}

code("10111213");
decode();
