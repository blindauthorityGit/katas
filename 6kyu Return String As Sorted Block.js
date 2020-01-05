function solve(arr) {
  let result = 0;

  let sortedChips = arr.sort((a, b) => {
    return a - b;
  });

  // add smallest chip pile to result
  result += sortedChips[0];
  // subtract from biggest pile smallest pile

  while (sortedChips[0] !== 0) {
    if (sortedChips[2] >= sortedChips[1]) {
      sortedChips[2]--;
      sortedChips[0]--;
    } else {
      sortedChips[1]--;
      sortedChips[0]--;
    }
  }

  if (sortedChips[1] > sortedChips[2]) {
    result += sortedChips[2];
  } else {
    result += sortedChips[1];
  }
  return result;
}
