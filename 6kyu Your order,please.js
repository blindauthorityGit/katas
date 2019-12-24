function order(words) {
  let arrCopy = words.split(" ");
  let res = [];

  for (let i = 0; i < arrCopy.length; i++) {
    for (let j = 0; j < arrCopy[i].split("").length; j++) {
      let char = arrCopy[i].split("")[j];
      if (char.match(/\d+/g)) {
        res.push(char + arrCopy[i]);
      }
    }
  }

  return res
    .sort()
    .map(x => x.substring(1))
    .join(" ");
}
