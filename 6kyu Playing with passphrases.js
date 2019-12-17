// function playPass(s, n) {
//   let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
//   let arr = s.toLowerCase().split("");
//   let res = [];
//   let resnu = [];
//   console.log(alphabet[0]);
//   for (let i = 0; i < s.length; i++) {
//     if (arr[i].toUpperCase() != arr[i].toLowerCase()) {
//       let pos = alphabet.indexOf(arr[i]);
//       res.push(pos + n);
//     } else {
//       console.log(arr[i]);
//       res.push(arr[i]);
//     }
//   }
//   console.log(res.reverse());
//   for (let j = 0; j < res.length; j++) {
//     let posi = res[j];
//     if (typeof res[j] == "number") {
//       resnu.push(alphabet[posi]);
//     } else {
//       resnu.push(res[j]);
//     }
//   }
//   console.log(resnu.join(" "));
// }

// playPass("I LOVE YOU!!!", 1);

const playPass = (string, shift) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArray = alphabet.split("");
  const splittedString = string.toLowerCase().split("");

  const shiftedString = [];

  splittedString.forEach(i => {
    function isAlphabetLetter(letter) {
      return letter === i;
    }

    if (alphabetArray.some(isAlphabetLetter)) {
      let letterIndex = alphabetArray.indexOf(i) + shift;
      if (letterIndex >= 26) {
        letterIndex = letterIndex - 26;
      }
      shiftedString.push(alphabet[letterIndex]);
    } else if (Number.isInteger(+i) === true && i !== " ") {
      const shiftedNumber = 9 - +i;
      shiftedString.push(shiftedNumber);
    } else {
      shiftedString.push(i);
    }
  });

  const mappedString = shiftedString.map((element, index) => {
    const incrementedIndex = index + 1;

    if (
      (incrementedIndex % 2 === 0 && incrementedIndex !== 0) ||
      element === " " ||
      Number.isInteger(+element) === true
    ) {
      return element;
    } else {
      return element.toUpperCase();
    }
  });

  const reversedString = mappedString.reverse();

  const joinedString = reversedString.join("");

  return joinedString;
};
