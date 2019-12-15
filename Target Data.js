function dateNbDays(a0, a, p) {
  const start = new Date("2016-01-01");
  const startms = Date.parse(start);
  let perDay = p / 36000;
  let sum = a0;
  let days = 0;
  for (let i = 0; ; i++) {
    if (sum >= a) {
      days = i;
      break;
    } else {
      sum += sum * perDay;
    }
  }
  let res = new Date(startms + 86400000 * days);
  return res.toISOString().slice(0, 10);
}
