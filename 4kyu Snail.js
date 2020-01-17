snail = function(array) {
  let res = [];
  res.push(array[0].join());

  res.push(array[1].reverse()[0]);
  res.push();
  console.log(array[1]);
  console.log(res);
  for (let i = 1; i <= array[0].length * array.length; i++) {
    console.log(i);
  }
};

snail([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);
