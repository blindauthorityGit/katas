var number = function(array) {
  let res = [];
  let num = 0;
  for (let i = 0; i < array.length; i++) {
    num++;
    res.push(num + ": " + array[i]);
  }
  return res;
};

number(["a", "b", "c"]);
