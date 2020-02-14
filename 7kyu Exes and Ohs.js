function XO(str) {
  let countX = 0;
  let countO = 0;
  let arr = str.toLowerCase().split("");
  arr.forEach(e => {
    if (e === "x") {
      countX++;
    }
    if (e === "o") {
      countO++;
    }
  });
  if (countX === countO) {
    return true;
  } else {
    return false;
  }
}

XO("xxxm");
