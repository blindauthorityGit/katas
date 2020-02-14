function findNextSquare(sq) {
  if (!Number.isInteger(Math.sqrt(sq))) {
    return -1;
  }
  for (let i = sq + 1; ; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      return i;
    } else {
      continue;
    }
  }
}

function countLettersAndDigits(input) {
  let arr = input.split("");
  let count = 0;
  arr.forEach(e => {
    if (e.match(/[A-Za-z]/g) || e.match(/[0-9]/g)) {
      console.log(e);
      count++;
    }
  });
  console.log(count);
  return count;
}

countLettersAndDigits("hel2!lo");
