const souls = (character, build) => {
  let lvlArr = [673, 690, 707, 724, 741, 758, 775, 793, 811, 829];
  let warrior = {
    level: 4,
    start: [11, 8, 12, 13, 13, 11, 9, 9].reduce((a, b) => a + b)
  };
  let knight = {
    level: 5,
    start: [14, 10, 10, 11, 11, 10, 9, 11].reduce((a, b) => a + b)
  };
  let wanderer = {
    level: 3,
    start: [14, 10, 10, 11, 11, 10, 9, 11].reduce((a, b) => a + b)
  };
  let thief = {
    level: 5,
    start: [9, 11, 9, 9, 15, 10, 12, 11].reduce((a, b) => a + b)
  };
  let bandit = {
    level: 4,
    start: [12, 8, 14, 14, 9, 11, 8, 10].reduce((a, b) => a + b)
  };
  let hunter = {
    level: 4,
    start: [11, 9, 11, 12, 14, 11, 9, 9].reduce((a, b) => a + b)
  };
  let sorcerer = {
    level: 3,
    start: [8, 15, 8, 9, 11, 8, 15, 8].reduce((a, b) => a + b)
  };
  let pyromancer = {
    level: 1,
    start: [10, 12, 11, 12, 9, 12, 10, 8].reduce((a, b) => a + b)
  };
  let cleric = {
    level: 2,
    start: [11, 11, 9, 12, 8, 11, 8, 14].reduce((a, b) => a + b)
  };
  let deprived = {
    level: 6,
    start: [11, 11, 11, 11, 11, 11, 11, 11].reduce((a, b) => a + b)
  };
  console.log(eval(character).start);
  console.log(build.reduce((a, b) => a + b));
  let n = 0;
  if (build.reduce((a, b) => a + b) - eval(character).start !== 0) {
    n = build.reduce((a, b) => a + b) - eval(character).start;
  } else {
    n = eval(character).level - 1;
  }

  let levelsNeeded = n + 1 - eval(character).level;
  let souls = 0;

  let currentLvl = eval(character).level;
  for (let i = eval(character).level; i <= levelsNeeded; i++) {
    souls += lvlArr[i - 1];
    currentLvl++;
    if (currentLvl > 11) {
      souls += Math.round(
        Math.pow(currentLvl, 3) * 0.02 +
          Math.pow(currentLvl, 2) * 3.06 +
          105.6 * currentLvl -
          895
      );
    }
  }
  console.log(souls);

  console.log(
    "Starting as a " +
      character +
      ", level " +
      (n + 1) +
      " will require " +
      souls +
      " souls."
  );
  return (
    "Starting as a " +
    character +
    ", level " +
    (n + 1) +
    " will require " +
    souls +
    " souls."
  );
};

souls("cleric", [13, 20, 24, 28, 17, 27, 19, 31]);
