function calculate(str) {
  let changed = str.replace(/plus/g, "+").replace(/minus/g, "-");
  return eval(changed).toString();
}
