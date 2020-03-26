function decoder(encoded, marker) {
  const res = [];
  let temp = [];
  res.push(encoded.split(marker).shift());
  temp.push(encoded.split(marker).pop());
  temp = temp
    .join("")
    .split("")
    .reverse()
    .join("");

  console.log(res.concat(temp).join(""));

  return res.concat(temp).join("");
}

decoder("Lor-.tile gnicsipida rutetcesnoc ,tema tis rolod muspi me", "-");
