function mineLocation(field) {
  let res = [];
  for (let i = 0; i < field.length; i++) {
    for (let k = 0; k < field[i].length; k++) {
      if (field[i][k] === 1) {
        res.push(i, k);
      }
    }
  }
  return res;
}
