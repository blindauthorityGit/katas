// function humanReadable(seconds) {
//   let dateObj = new Date(seconds * 1000);

//   let hours = dateObj.getUTCHours();
//   let minutes = dateObj.getUTCMinutes();
//   let secondsNew = dateObj.getUTCSeconds();
//   let solution =
//     hours.toString().padStart(2, "0") +
//     ":" +
//     minutes.toString().padStart(2, "0") +
//     ":" +
//     secondsNew.toString().padStart(2, "0");
//   return solution;
// }

// console.log(humanReadable(3600));

function humanReadable(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let seconds2 = Math.floor(seconds % 60);
  let array = [hours, minutes, seconds2];
  let print = array.map(function(v) {
    if (v.toString().length < 2) {
      return "0" + v.toString();
    } else {
      return v;
    }
  });
  return `${print[0]}:${print[1]}:${print[2]}`;
}

console.log(humanReadable(4800));
