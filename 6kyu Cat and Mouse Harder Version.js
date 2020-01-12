function catMouse(x, j) {
  let arr = x.split("");
  let catPos = 0;
  if (x.includes("C")) {
    catPos = arr.indexOf("C");
  } else {
    return "boring without all three";
  }
  let mousePos = 0;
  if (x.includes("m")) {
    mousePos = arr.indexOf("m");
  } else {
    return "boring without all three";
  }
  let dogPos = 0;
  if (x.includes("D")) {
    dogPos = arr.indexOf("D");
  } else {
    console.log("boring without all three");
    return "boring without all three";
  }
  let distance = 0;
  if (catPos > mousePos) {
    distance = catPos - mousePos;
  } else {
    distance = mousePos - catPos;
  }
  if (dogPos > catPos && dogPos < catPos + j && mousePos > dogPos) {
    console.log("Protected!");
    return "Protected!";
  }
  console.log(dogPos > catPos, dogPos < catPos + j, mousePos > dogPos);
  if (distance <= j) {
    if (dogPos < catPos || dogPos > catPos + j) {
      console.log("Caught!");
      return "Caught!";
    }
  } else if (distance > j) {
    console.log("Escaped");
    return "Escaped!";
  }
}

catMouse(".mC..D....", 6);
