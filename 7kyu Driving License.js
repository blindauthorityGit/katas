function driver(data) {
  const date = new Date(data[3]);
  let month = date.getMonth();
  let res = [];
  for (let i = 0; i < 5; i++) {
    if (data[2][i] !== undefined) {
      res.push(data[2][i]);
    } else {
      res.push(9);
    }
  }
  console.log(date.getYear());
  if (date.getYear() === 100) {
    res.push(0);
  } else {
    res.push(
      date
        .getYear()
        .toString()
        .split("")[0]
    );
  }
  if (data[4] === "F") {
    if (month < 9) {
      res.push("5" + (date.getMonth() + 1));
    } else {
      res.push("6" + (date.getMonth() + 1));
    }
  } else {
    if (month < 9) {
      res.push("0");
      res.push(date.getMonth() + 1);
    } else {
      res.push("1");
      res.push(date.getMonth() + 1);
    }
  }
  res.push(data[3][0]);
  console.log(data[3][0]);
  res.push(data[3][1]);
  res.push(data[0][0]);
  if (data[1][0] !== undefined) {
    res.push(data[1][0]);
  } else {
    res.push(9);
  }
  res.push(9);
  res.push("AA");

  console.log(date.getMonth() + 1);
  console.log(
    res
      .join("")
      .toString()
      .toUpperCase()
  );
  return res.join("");
}

driver(["John", "James", "Smith", "01-Jan-2000", "M"]);
