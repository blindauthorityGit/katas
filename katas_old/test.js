function duplicateCount(text) {
  let array = text.toLowerCase().split("");
  let array2 = [...array];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        console.log(array[i]);
      }
    }
  }
}
console.log(duplicateCount("JOHANNES"));
