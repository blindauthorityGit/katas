function shuffledArray(shuffled) {
  function sortNumber(a, b) {
    return a - b;
  }
  let sum = 0;
  for (let i = 0; i < shuffled.length; i++) {
    sum = sum += shuffled[i];
  }
  let res = sum / 2;
  for (let j = 0; j < shuffled.length; j++) {
    if (shuffled[j] === res) {
      shuffled.splice(j, 1);
      break;
    }
  }
  console.log(res);

  console.log(shuffled.sort(sortNumber));
  return shuffled.sort();
}
