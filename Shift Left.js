function shiftLeft(s, t) {
  let i = s.length;
  let j = t.length;
  console.log(s[2]);
  while (i >= 0 && j >= 0 && s[i] == t[j]) {
    i--;
    j--;
    return i + 1 + (j + 1);
  }
}

shiftLeft("test", "west");
