function scoreHand(cards) {
  let arr = [];
  let ace = [];
  let score = 0;

  cards.forEach(e => {
    if (e !== "A") {
      arr.push(e);
    } else {
      ace.push(e);
    }
  });

  let res = arr.concat(ace);

  for (let i = 0; i < res.length; i++) {
    if (res[i].match("^\\d+$")) {
      score += parseInt(res[i], 10);
    }
    if (res[i] === "K" || res[i] === "J" || res[i] === "Q") {
      score += 10;
    }
    if (res[i] === "A") {
      if (score + 11 > 21 || res[i + 1] === "A") {
        score += 1;
      } else {
        score += 11;
      }
    }
  }

  return score;
}

scoreHand(["J", "A", "A"]);
