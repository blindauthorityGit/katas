// function findOutlier(integers) {
//   let oddNumber = integers.filter(number => number % 2 !== 0);
//   let evenNumber = integers.filter(number => number % 2 === 0);
//   let switcher = oddNumber.join();
//   let switcher2 = evenNumber.join();
//   let parsed = parseInt(switcher);
//   let parsed2 = parseInt(switcher2);

//   if (integers.oddNumber < integers.evenNumber) {
//     console.log("jaaaa");
//   } else {
//     console.log("test");
//   }

//   return parsed;
// }

// console.log(findOutlier([2, 4, 6, 8, 11, 14, 16]));

function findOutlier(integers) {
  let odd = [];
  let even = [];

  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      even.push(integers[i]);
    } else {
      odd.push(integers[i]);
    }
  }

  if (odd.length === 1) {
    let N = parseInt(odd);
    return N;
  } else {
    let M = parseInt(even);
    return M;
  }

  console.log(even);
}

console.log(findOutlier([2, 4, 6, 8, 11, 14, 16]));
