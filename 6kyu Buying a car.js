function nbMonths(
  startPriceOld,
  startPriceNew,
  savingperMonth,
  percentLossByMonth
) {
  let sum = 0;
  let old = startPriceOld;
  let newP = startPriceNew;
  let percent = percentLossByMonth;
  let res = [];
  if (startPriceOld >= startPriceNew) {
    res.push(0, startPriceOld - startPriceNew);
  } else {
    for (let i = 0; ; i++) {
      old = old - (old / 100) * percent;
      newP = newP - (newP / 100) * percent;

      if (i % 2 === 0) {
        percent = percent + 0.5;
      }
      sum += savingperMonth;
      if (sum + old >= newP) {
        res.push(i + 1, Math.round(sum + old - newP));
        break;
      }
    }
  }
  return res;
}
