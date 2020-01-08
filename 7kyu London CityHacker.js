function londonCityHacker(journey) {
  let total = 0;
  let tube = 2.4;
  let bus = 1.5;

  for (let i = 0; i < journey.length; i++) {
    if (typeof journey[i] === "number" && typeof journey[i + 1] === "number") {
      i++;
    }
    if (typeof journey[i] === "number") {
      total += bus;
    } else {
      total += tube;
    }
  }

  return "£" + total.toFixed(2);
}

londonCityHacker(["Northern", "Central", "Circle"]);
