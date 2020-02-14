function validBraces(braces) {
  let arr = braces.split("");
  let open = 0;
  let close = 0;
  arr.forEach(e => {
    if (e === "(" || e === "{" || e === "[") {
      console.log(e);
      open++;
    } else {
      console.log(e);
      close++;
    }
  });

  if (open === close) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

validBraces("[(])");
validBraces("([{}])");
