var countBits = function(n) {
  let binary = (n >>> 0).toString(2);
  let arr = binary.split("");
  let counter = 0;

  arr.forEach(function(x) {
    if (x === "1") {
      counter++;
    }
  });

  return counter;
};

countBits(4);
