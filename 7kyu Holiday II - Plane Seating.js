function planeSeat(a) {
  let num = a.match(/\d+/)[0];
  let char = a.replace(/[0-9]/g, "");
  let res = [];

  if (num <= 20) {
    res.push("Front-");
  } else if (num > 20 && num <= 40) {
    res.push("Middle-");
  } else if (num > 40 && num <= 60) {
    res.push("Back-");
  } else if (num > 60) {
    return "No Seat!!";
  }
  if (char === "A" || char === "B" || char === "C") {
    res.push("Left");
  } else if (char === "D" || char === "E" || char === "F") {
    res.push("Middle");
  } else if (char === "G" || char === "H" || char === "K") {
    res.push("Right");
  } else {
    return "No Seat!!";
  }

  return res.join("");
}

planeSeat("15K");
