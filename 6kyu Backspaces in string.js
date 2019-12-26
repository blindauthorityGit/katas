function clean_string(s) {
  var result = "";
  s.split("").forEach(function(char) {
    if (char !== "#") {
      result += char;
    } else if (char === "#" && result.length) {
      result = result.substr(0, result.length - 1);
    }
  });
  return result;
}
