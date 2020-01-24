function array_diff(a, b) {
  return a.filter(x => !b.includes(x));
}

array_diff(
  [7, 0, 15, -14, 3, -15, 12, -1, 13, -13, -8, -6, -15],
  [-15, -8, -15, 7, -14, 15, -13, -6]
);
