function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}

sumTwoSmallestNumbers([23, 71, 33, 82, 1]);
