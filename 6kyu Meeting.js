function meeting(s) {
  let arr = s.toUpperCase().split(";");
  let words = arr.join(" ").split(/[ :]+/);
  let firstName = words.filter(function(value, index, ar) {
    return index % 2 == 0;
  });
  let lastName = words.filter(function(value, index, ar) {
    return index % 2 !== 0;
  });
  let res = [];
  for (let i = 0; i < firstName.length; i++) {
    res.push("(" + lastName[i] + ", " + firstName[i] + ")");
  }
  return res.sort().join("");
}

meeting(
  "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"
);
