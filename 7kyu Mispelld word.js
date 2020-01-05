var mispelled = function(word1, word2) {
  let words = [word1, word2].sort((a, b) => b.length - a.length);
  let wOne = words[0].split("");
  let wTwo = words[1].split("");
  let check = wOne.map(e => wTwo.includes(e));
  let counter = 0;
  check.forEach(element => {
    if (element === false) {
      counter++;
    }
  });
  if (counter <= 1) {
    return true;
  } else {
    return false;
  }
};

mispelled("versed", "aaversed");
