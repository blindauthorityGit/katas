function iqTest(numbers) {
  let array = numbers.split(" ").map(function(item) {
    return parseInt(item, 10);
  });
  let evenCount = 0;
  let oddCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  console.log(array);
  console.log(evenCount);
  console.log(oddCount);
  if (evenCount > oddCount) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] % 2 !== 0) {
        let pos = array[j];
        let posi = array.indexOf(pos);
        console.log(posi + 1);
        return +posi + 1;
      }
    }
  } else {
    for (let k = 0; k < array.length; k++) {
      if (array[k] % 2 === 0) {
        let pos2 = array[j];
        let posi2 = array.indexOf(pos);
        console.log(posi2 + 1);
        return +posi2 + 1;
      }
    }
  }
}
iqTest("2 4 7 8 10");
