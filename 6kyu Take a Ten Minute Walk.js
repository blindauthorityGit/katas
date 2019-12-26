function isValidWalk(walk) {
  let counterVert = 0;
  let counterHoriz = 0;
  walk.forEach(function(x) {
    if (x === "n") {
      counterVert++;
    } else if (x === "s") {
      counterVert--;
    } else if (x === "e") {
      counterHoriz++;
    } else if (x === "w") {
      counterHoriz--;
    }
  });

  if (walk.length === 10 && counterVert === 0 && counterHoriz === 0) {
    return true;
  } else {
    return false;
  }
}

isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]);
