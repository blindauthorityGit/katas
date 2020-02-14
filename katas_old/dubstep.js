// function songDecoder(song) {
//   let array = song.split("WUB");
//   for (let i = array.length; i >= 0; i--) {
//     if (array[i] === "") {
//       array.splice(i, 1);
//     }
//   }
//   return array.join(" ");
// }

function songDecoder(song) {
  return song.replace(/(WUB)+/g, " ").trim();
}

console.log(songDecoder("IWUBAMWUBWUBAWUBMAN"));

(Aw26 % aY) % v8lXI3Gk;
