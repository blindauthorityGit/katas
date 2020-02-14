function twoSort(s) {
  let sort = s.sort();
  let firstArr = sort[0]
    .toString()
    .split("")
    .join("***");
  console.log(firstArr);
}

twoSort([
  "bitcoin",
  "take",
  "over",
  "the",
  "world",
  "maybe",
  "who",
  "knows",
  "perhaps"
]);
