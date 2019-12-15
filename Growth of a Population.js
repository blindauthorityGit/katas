function nbYear(p0, percent, aug, p) {
  let sum = 0;
  let firstYerar = p0 + p0 * (percent / 100) + aug;
  let arr = [firstYerar];
  for (let i = 0; 5; i++) {
    if (arr[i] >= p) {
      console.log(i + 1);
      return i + 1;
      break;
    } else {
      arr.push(Math.floor(arr[i] + arr[i] * (percent / 100) + aug));
    }
  }
}
//   let firstYerar = p0 + p0 * (percent / 100) + aug;
//   let sum = 0;
//   if(firstYerar >= p){
//       console.log(1)
//   } else {
//       for(let i = 0;;i++){
//         sum = p0 + p0 * (percent / 100) + aug;

//       }
//   }

nbYear(1500, 5, 100, 5000);
