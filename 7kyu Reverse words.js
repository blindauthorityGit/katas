function reverseWords(str) {
  let arr = str.split(" ");
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(
      arr[i]
        .split("")
        .reverse()
        .join("")
    );
  }
  return res.join(" ");
}
