const midPoint = str => {
  let arr = str.split("");
  let middle = arr.length / 2;
  let middleOne = [];
  let middleTwo = [];
  if (arr.length % 2 === 0) {
    middleOne = arr.slice(0, middle - 1);
    middleTwo = arr.slice(middle + 1, arr.length);

    console.log(middleOne, middleTwo);
  } else {
    middleOne = arr.slice(0, middle);
    middleTwo = arr.slice(middle + 1, arr.length);
    console.log(middleOne, middleTwo);
  }

  for (let i = 0; i < 3; i++) {
    if (middleOne.length >= 3) {
      if (middleOne.length % 2 === 0) {
        middleOne = middleOne.slice(0, middle - 1);
        middleTwo = middleTwo.slice(middle + 1, arr.length);
        console.log(middleOne, middleTwo);
      } else {
        middleOne = middleOne.slice(0, middle);
        middleTwo = middleTwo.slice(middle + 1, arr.length);
      }
    } else {
      break;
    }
  }

  //code me
};

midPoint("abcdefghij");
