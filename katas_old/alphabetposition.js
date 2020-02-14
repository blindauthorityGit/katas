function descendingOrder(n) {
  let num = n
    .toString()
    .split("")
    .sort()
    .reverse()
    .join("");
  console.log(parseInt(num, 10));
  console.log(num);
  return n
    .toString()
    .split("")
    .sort()
    .reverse()
    .parseInt(this, 10);
}

descendingOrder(454646168);
