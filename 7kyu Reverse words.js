function reverseWords(str) {
  let arr = str.split(" ");
  let res = arr.map(e =>
    e
      .split("")
      .reverse()
      .join("")
  );
  return res.join(" ");
}

reverseWords("The quick brown fox jumps over the lazy dog.");

console.log(75 % 3);
