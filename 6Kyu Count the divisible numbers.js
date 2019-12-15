function divisibleCount(x, y, k) {
  //code me
  return Math.floor(y / k) - Math.floor((x - 1) / k);
}

divisibleCount(6, 11, 2);
