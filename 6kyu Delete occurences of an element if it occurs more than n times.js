// function deleteNth(arr, n) {
//   let res = [];
//   const nums = arr.filter((i, p) => arr.indexOf(i) == p);
//   //   for (let i = 0; i < nums.length; i++) {
//   //     console.log(arr.filter(e => e === nums[i]).length);
//   //   }

//   for (let j = 0; j < arr.length; j++) {
//     console.log(res.filter(e => e === res[j - 1]).length, n);
//     if (res.filter(e => e === res[j - 1]).length >= n) {
//       console.log("da isses");
//       continue;
//     } else {
//       res.push(arr[j]);
//     }
//     // console.log(res.filter(e => e === res[j]).length);
//   }

//   console.log(nums);
//   /*for (let i = 0; i < nums.length; i++) {
//     let counter = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] === nums[i]) {
//         if (counter < n) {
//           counter++;
//           res.push(arr[j]);
//         }
//       }
//     }
//     console.log(counter);
//   }*/
//   console.log(res);
//   return res;
// }

function deleteNth(arr, x) {
  while (true) {
    for (var i = 0; i < arr.length; ++i) {
      var count = 0;

      for (var j = 0; j < arr.length; ++j) {
        if (arr[i] === arr[j]) {
          ++count;

          if (count > x) {
            arr.splice(j, 1);
            break;
          }
        }
      }
      if (j !== arr.length) break;
    }
    if (i === arr.length) break;
  }

  return arr;
}

deleteNth([1, 2, 3, 1, 1, 2, 1, 2, 3, 3, 2, 4, 5, 3, 1], 3);
