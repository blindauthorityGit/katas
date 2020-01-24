function spinWords(wrd) {
  const arr = wrd.split(" ");
  let res = [];
  arr.forEach(e => {
    if (e.length < 5) {
      res.push(e);
    } else {
      res.push(
        e
          .split("")
          .reverse()
          .join("")
      );
    }
  });
  return res.join(" ");
}
