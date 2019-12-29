function createPhoneNumber(numbers) {
  let preF = [];
  let middleF = [];
  let lastF = [];

  for (let i = 0; i <= 2; i++) {
    preF.push(numbers[i]);
  }
  for (let k = 3; k <= 5; k++) {
    middleF.push(numbers[k]);
  }
  for (let j = 6; j < numbers.length; j++) {
    lastF.push(numbers[j]);
  }
  return `(${preF.join("")}) ${middleF.join("")}-${lastF.join("")}`;
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
