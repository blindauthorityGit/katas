function bouncingBall(h, bounce, window) {
  let height = h;
  let ball = height;
  for (let i = 0; ; i++) {
    if (ball >= window) {
      ball = ball * bounce;
    } else {
      console.log(i + 1);
      return i + 1;
      break;
    }
  }
}
let h = 30;
console.log(Number.isInteger(155));
bouncingBall(30.0, 0.66, 1.5);
