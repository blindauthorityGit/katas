function bears(x, s) {
  let answer = ["", false];
  let count = 0;
  for (i = 0; i < s.length - 1; i++) {
    if ((s[i] == "8" && s[i + 1] == "B") || (s[i] == "B" && s[i + 1] == "8")) {
      answer[0] += s[i] + s[i + 1];
      count++;
      i++;
    }
  }
  if (count >= x) answer[1] = true;
  return answer;
}
