// function toCamelCase(str) {
//   let array = str.split("");
//   let firstOne = array[0];
//   console.log(firstOne);

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === "-") {
//       array.splice(i, 1);
//     } else if (array[i] === "_") {
//       array.splice(i, 1);
//     }
//   }
//   if (array.length >= 1) {
//     if (array[0] !== array[0].toUpperCase()) {
//       array[3] = array[3].toUpperCase();
//       array[10] = array[10].toUpperCase();
//       console.log("is klein");
//     }
//   }
//   console.log(array.join(""));
//   return array.join();
// }

// toCamelCase("the_stealth_warrior");

function toCamelCase(str) {
  if (!str) {
    return "";
  } else {
    let replacer = str.replace(/-|_/g, " ").split(" ");
    let firstOne = [replacer[0]];

    console.log(replacer.length);
    for (let i = 1; i < replacer.length; i++) {
      firstOne.push(
        replacer[i].substring(0, 1).toUpperCase() +
          replacer[i].substring(1).toLowerCase()
      );
    }
    return firstOne.join("");
  }
}

console.log(toCamelCase("A-B-C"));
