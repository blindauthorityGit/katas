function towerBuilder(nFloors) {
  let array = [];
  for (let i = 0; i < nFloors; i++) {
    array.push(
      " ".repeat(nFloors - i - 1) +
        "*".repeat(2 * i + 1) +
        " ".repeat(nFloors - i - 1)
    );
  }
  return array;
  // build here
}

console.log(towerBuilder(10));
