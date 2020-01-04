function solve(arr) {
  let [a, b, c] = arr.sort((a, b) => a - b);
  console.log(a > b + c ? b + z : Math.floor(a + b + c) / 2);
}

solve([1, 2, 1]);
