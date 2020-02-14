function jumpingNumber(n) {
  let arr = n.toString().split("");
  arr = arr.map(e => (e = parseInt(e, 10)));
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i + 1] === arr[i] + 1 ||
      arr[i + 1] === arr[i] - 1 ||
      arr[i + 1] === undefined
    ) {
    } else {
      return "Not!!";
    }
  }
  return "Jumping!!";
}

jumpingNumber(8987);
