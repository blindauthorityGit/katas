function validParentheses(parens) {
  let arr = parens.split("");
  let open = 0;
  let close = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      open++;
    } else if (arr[i] === ")") {
      close++;
    }
    if (open === 1 && close > open) {
      return false;
    }
  }

  if (arr[0] === ")" || arr[arr.length - 1] === "(") {
    return false;
  }

  if (open === close) {
    return true;
  } else {
    return false;
  }
}

validParentheses("()");
