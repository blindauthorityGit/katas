function findOdd(A) {
  let counter = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      if (A[i] == A[j]) {
        counter++;
      }
    }
    if (counter % 2 !== 0) {
      console.log(A[i]);
      return A[i];
    }
  }
  //happy coding!
}

findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]);
