function rgb(r, g, b) {
  let arr = [r, g, b];
  let res = [];

  arr.forEach(function(x) {
    if (x > 255) {
      x = 255;
    } else if (x <= 0) {
      x = "00";
    }
    res.push(x.toString(16));
  });

  for (let i = 0; i < res.length; i++) {
    if (res[i].length === 1) {
      res[i] = "0" + res[i];
    }
  }

  console.log(
    res
      .join("")
      .toString()
      .toUpperCase()
  );

  return res
    .join("")
    .toString()
    .toUpperCase();
}

rgb(249, 166, 10);
