function borrow(s) {
  let chars = s.match(/[a-zA-Z]+/g);
  if (chars === null) {
    return "";
  } else {
    return chars.join("").toLowerCase();
  }
}
