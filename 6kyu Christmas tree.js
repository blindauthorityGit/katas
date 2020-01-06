function christmasTree(height) {
  let res = [];
  for (let i = height; i >= 1; i--) {
    if (i === height) {
      res.push(
        " ".repeat(height - i) + "*".repeat(i * 2 - 1) + " ".repeat(height - i)
      );
    } else if (i > 1) {
      res.push(
        " ".repeat(height - i) +
          "*".repeat(i * 2 - 1) +
          " ".repeat(height - i) +
          "\n"
      );
    } else {
      res.push(
        " ".repeat(height - i) + "*".repeat(i) + " ".repeat(height - i) + "\n"
      );
    }
  }
  console.log(res.reverse().join(""));
  return res.join("");
}

christmasTree(9);
