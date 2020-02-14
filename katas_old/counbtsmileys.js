//return the total number of smiling faces in the array
function countSmileys(arr) {
  let smileys = [
    ":)",
    ";)",
    ":-)",
    ";-)",
    ";~)",
    ":~)",
    ":D",
    ";D",
    ":-D",
    ":~D",
    ";-D",
    ";~D"
  ];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < smileys.length; j++) {
      if (arr[i] === smileys[j]) {
        count++;
      }
    }
  }
  console.log(count);
  return count;
}

countSmileys([":)", ";~)", "XD"]);
