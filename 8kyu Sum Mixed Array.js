// function sumMix(x) {
//   let arr = [1, 2, 3, 4, 7, 5, 6, 979, 446, 15366, 34534];
//   console.log(arr.map(x => x % 2));
//   console.log(arr.splice(4, Math.floor(Math.random() * 10)));
//   console.log("test");
//   //   return x.map(num => parseInt(num, 10)).reduce((a, b) => a + b);
// }

// sumMix(2);

function dirReduc(arr) {
  let sum = 0;
  let sumC = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "NORTH") {
      sum += 1;
    } else if (arr[i] == "SOUTH") {
      sum -= 1;
    } else if (arr[i] == "EAST") {
      sumC += 1;
    } else if (arr[i] == "WEST") {
      sumC -= 1;
    }
  }
  
 if(sum == 0 && sumC == 0){
    console.log("Stay")
 } else if (sum >)
  console.log(sum, sumC);
}

dirReduc(["NORTH", "SOUTH", "SOUTH"]);

KlaNGSchaLEn987654!