function inArray(array1, array2) {
  let r = [];
  for (let i = 0; i < array2.length; i++) {
    for (let j = 0; j < array1.length; j++) {
      if (array2[i].includes(array1[j])) {
        r.push(array1[j]);
      }
    }
  }
  return r.filter((i, p) => r.indexOf(i) == p).sort();
}

inArray(
  ["xyz", "live", "strong"],
  ["lively", "alive", "harp", "sharp", "armstrong"]
);
