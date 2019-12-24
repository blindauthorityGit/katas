var removeVowels = function(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let arr = str.split("");
  let res = [];

  arr.forEach(e => {
    vowels.forEach(d => {
      if (e === d) {
        res.push(e);
      }
    });
  });

  return arr
    .filter(function(el) {
      return res.indexOf(el) < 0;
    })
    .join("");
};
