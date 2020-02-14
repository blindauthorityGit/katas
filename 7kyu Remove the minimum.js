function removeSmallest(numbers) {
  let smallest = [...numbers].sort((a, b) => a - b)[0];
  numbers.splice(numbers.indexOf(smallest), 1);
  console.log(numbers);
  return numbers;
}
