/*function strongestEven(n, m) {
  let arr = [];
  let counter = [];
  for (let i = n; i <= m; i++) {
    arr.push(i);
  }
  console.log(arr.filter(x => x % 2 == 0));
  even = arr.filter(x => x % 2 == 0);
  let copy = [...even];
  console.log(even[1]);
  for (let j = 0; j < even.length; j++) {
    let count = 0;
    while (copy[j] % 2 === 0) {
      copy[j] = Math.floor(copy[j] / 2);
      count++;
    }
    counter.push(count);
  }
  const max = counter.reduce((a, b) => Math.max(a, b));
  console.log(max);
  console.log(even[counter.indexOf(counter.reduce((a, b) => Math.max(a, b)))]);
  return even[counter.indexOf(counter.reduce((a, b) => Math.max(a, b)))];
}
strongestEven(48, 56);
*/
function strongestEvenTwo(n, m) {
  let count = [];

  console.log(n, m);
  for (let i = n; i < m; i++) {
    let counter = 0;
    let temp = i;
    while (temp % 2 === 0) {
      temp = temp / 2;
      counter++;
    }
    count.push(counter);
  }
  console.log(count);
  console.log(n + count.indexOf(count.reduce((a, b) => Math.max(a, b))));
  return n + count.indexOf(count.reduce((a, b) => Math.max(a, b)));
}

strongestEvenTwo(1, 2129680158);
