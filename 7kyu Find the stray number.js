function stray(numbers) {
  console.log(numbers[numbers.length - 1]);
  console.log(numbers.sort((a, b) => a - b));
  let sorted = numbers.sort((a, b) => a - b);
  if (sorted[0] !== sorted[1]) {
    return sorted[0];
  } else {
    return sorted[numbers.length - 1];
  }
}

stray([17, 17, 3, 17, 17, 17, 17]);
