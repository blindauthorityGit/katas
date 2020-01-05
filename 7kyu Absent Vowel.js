function absentVowel(x) {
  let arr = x.split("");
  let aC = arr.filter(a => a.includes("a"));
  let eC = arr.filter(a => a.includes("e"));
  let iC = arr.filter(a => a.includes("i"));
  let oC = arr.filter(a => a.includes("o"));
  let uC = arr.filter(a => a.includes("u"));

  if (aC.length === 0) {
    return 0;
  } else if (eC.length === 0) {
    return 1;
  } else if (iC.length === 0) {
    return 2;
  } else if (oC.length === 0) {
    return 3;
  } else if (uC.length === 0) {
    return 4;
  }
}

absentVowel("John Doe hs seven red pples under his bsket");
