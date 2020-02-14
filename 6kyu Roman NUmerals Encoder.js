function solution(number) {
  let res = [];
  while (number >= 1000) {
    res.push("M");
    number -= 1000;
  }
  while (number >= 900) {
    res.push("CM");
    number -= 900;
  }
  while (number >= 500) {
    res.push("D");
    number -= 500;
  }
  while (number >= 400) {
    res.push("CD");
    number -= 400;
  }
  while (number >= 100) {
    res.push("C");
    number -= 100;
  }
  while (number >= 90) {
    res.push("XC");
    number -= 90;
  }

  while (number >= 50) {
    res.push("L");
    number -= 50;
  }
  while (number >= 40) {
    res.push("XL");
    number -= 40;
  }

  while (number >= 10) {
    res.push("X");
    number -= 10;
  }

  while (number === 9) {
    res.push("IX");
    number -= 9;
  }
  while (number >= 5) {
    res.push("V");
    number -= 5;
  }
  while (number == 4) {
    res.push("IV");
    number -= 4;
  }
  while (number == 3) {
    res.push("III");
    number -= 3;
  }
  while (number == 2) {
    res.push("II");
    number -= 2;
  }
  while (number == 1) {
    res.push("I");
    number -= 1;
  }
  return res.join("").toString();
}
