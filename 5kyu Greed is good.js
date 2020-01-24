function score(dice) {
  let sum = 0;
  let lens = [];

  for (let i = 1; i <= 6; i++) {
    lens.push(dice.filter(x => x === i).length);
  }

  if (lens[0] >= 3) {
    sum += 1000;
    lens[0] = lens[0] - 3;
  }
  sum += lens[0] * 100;

  if (lens[1] >= 3) {
    sum += 200;
  }
  if (lens[2] >= 3) {
    sum += 300;
  }
  if (lens[3] >= 3) {
    sum += 400;
  }
  if (lens[4] >= 3) {
    sum += 500;
    lens[4] = lens[4] - 3;
  }
  sum += lens[4] * 50;

  if (lens[5] >= 3) {
    sum += 600;
  }
  console.log(lens);
  console.log(sum);
  return sum;
}

score([2, 3, 4, 6, 2]);
