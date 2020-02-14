function findMissingLetter(array) {
  alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  console.log(array);
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toLowerCase();
    if (
      array[i + 1] !== alphabet[alphabet.indexOf(array[i]) + 1] &&
      array[i + 1] !== undefined
    ) {
      console.log(alphabet[alphabet.indexOf(array[i]) + 1]);
      return alphabet[alphabet.indexOf(array[i]) + 1];
    }
  }
}

findMissingLetter(["I", "J", "L", "M", "N"]);
