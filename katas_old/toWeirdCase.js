function toWeirdCase(string) {
  var reg = /\b(?![\s.])/;
  let res = string.split("");
  let total = [];

  for (let k = 0; k < res.length; k++) {
    let newString = "";
    for (let j = 0; j < res[k].length; j++) {
      if (j % 2 == 0) {
        newString += res[k].charAt(j).toUpperCase();
      } else {
        newString += res[k].charAt(j).toLowerCase();
      }
    }
    total.push(newString);
  }

  return total.join("");
}

console.log(toWeirdCase("Hello"));

toWeirdCase("Hello");

// function toWeirdCase(string) {
//     var reg = /\b(?![\s.])/
//     var res = string.split(reg)
//     var newArr = []

//     for (let k = 0; k < res.length; k++) {
//       let newString = "";
//       for (let j = 0; j < res[k].length; j++) {
//         if (j % 2 == 0) {
//           newString += res[k].charAt(j).toUpperCase()
//         } else {
//           newString += res[k].charAt(j).toLowerCase()
//         }
//       }
//       newArr.push(newString)
//     }
//     return newArr.join('')
//   }

//   console.log(toWeirdCase('This is a test'))
