function partsSums(ls) {
  let arr = [...ls];
  let sum = 0;
  let res = [];
  let words = [
    "Titten",
    "Boobies",
    "Möpse",
    "Kannen",
    "Brüste",
    "Bazongas",
    "Tepf"
  ];
  let randomWords = Math.floor(Math.random() * words.length);
  console.log(randomWords);
  console.log(
    arr.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0)
  );

  for (let i = 0; i < ls.length + 1; i++) {
    res.push(
      arr.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0)
    );
    console.log(arr);
    arr.shift();
  }
  console.log(res);

  console.log(
    ls.forEach(i =>
      console.log(i + " " + words[Math.floor(Math.random() * words.length)])
    )
  );
}
partsSums([0, 1, 3, 6, 10]);
