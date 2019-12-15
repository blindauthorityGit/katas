var countDeafRats = function(town) {
  let arr = town.replace(/ /g, "").split("P");
  console.log(arr);
  let first = [];
  let count = 0;
  let pairsFirst = [];
  let pairsSecond = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "P") {
      first = arr.splice(i + 1);
    }
  }
  for (let j = 0; j < town.length; j += 2) {
    if (arr[j + 1] !== undefined) {
      pairsFirst.push(arr[j] + arr[j + 1]);
    }
    if (first[j + 1] !== undefined) {
      pairsSecond.push(first[j] + first[j + 1]);
    }
  }
  for (let k = 0; k < town.length; k++) {
    if (pairsFirst[k] === "O~") {
      count++;
    }
    if (pairsSecond[k] === "~O") {
      count++;
    }
  }
  return count;
};

countDeafRats("P O~ O~ ~O O~");
