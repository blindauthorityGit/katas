function trafficLights(road, n) {
  let time = n;
  let red = 0;
  let green = 0;
  let orange = 0;
  let arr = road.split("");
  let r = arr.indexOf("R");
  let g = arr.indexOf("G");
  let c = arr.indexOf("C");
  let res = [];
  console.log(arr.indexOf("R"));
  for (let i = 0; i < time; i++) {
    res.push(
      arr
        .join()
        .toString()
        .replace(/,/g, "")
    );
    red++;
    green++;
    if (red % 5 === 0) {
      arr[r] = "O";
    }
    console.log(arr);
  }

  // for (let i = 0; i < time; i++) {
  //     let arrTwo = [...arr];
  //     red++;
  //     green++;

  //     if (red % 5 === 0 || green % 5 === 0) {
  //       if (arrTwo[i] === "R") {
  //         arrTwo[i] = "O";
  //       }
  //       if (arrTwo[i] === "G") {
  //         arrTwo[i] = "O";
  //       }
  //     }
  console.log(res);
}

trafficLights("C...R..G..............", 10);
let test = "...C25";
console.log(test[4]);
console.log(typeof test);
