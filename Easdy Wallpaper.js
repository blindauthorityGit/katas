function wallpaper(l, w, h) {
  var numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty"
  ];
  let room = l * h * 2 + w * h * 2;

  let calc = room * (1 / 0.52);
  let extra = (calc / 100) * 15;
  let sum = Math.ceil(calc + extra);
  console.log(room);
  console.log(sum / 10);
  console.log(numbers[Math.floor(Math.ceil(sum / 10))]);
  if (w * h * l === 0) {
    console.log("zero");
    return "zero";
  }
  return numbers[Math.floor(Math.ceil(sum / 10))];
  console.log(extra);
}

wallpaper(0.0, 3.5, 3.0);
