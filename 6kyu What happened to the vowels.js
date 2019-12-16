function wordGenerator(str, arr) {
  p = arr ? arr : [];
  vowels = ["a", "e", "i", "o", "u"];
  has = false;
  str.split("").forEach((x, i, aa) => {
    if (vowels.includes(x.toLowerCase())) {
      iterate(str, i, p);
      has = true;
    }
  });

  if (!has) p.push(str);
  return p.sort();
}

function iterate(str, i, rr) {
  vowels.forEach(x => {
    pp = (
      str.substring(0, i) +
      x +
      str.substring(i + 1, str.length)
    ).toLowerCase();
    if (!rr.includes(pp)) {
      rr.push(pp);
      wordGenerator(pp, rr);
    }
  });
}
