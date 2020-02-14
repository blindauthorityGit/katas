function divisors(integer) {
  let res = [];
  for (let i = 0; i < integer; i++) {
    if (integer % i === 0 && i !== 1) {
      res.push(i);
    }
  }
  if (res.length === 0) {
    return integer + " is prime";
  } else {
    return res;
  }
}

divisors(13);
