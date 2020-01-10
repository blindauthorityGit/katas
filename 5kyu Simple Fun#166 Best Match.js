function bestMatch(a, z) {
  let res = [];
  let duplicates = [];

  for (let i = 0; i < a.length; i++) {
    res.push(a[i] - z[i]);
  }

  let pos = res[Math.min(...res)];
  console.log(res);
  for (let i = 0; i < res.length; i++) {
    if (res[i] === res[Math.min(...res)]) {
      duplicates.push(i);
    }
  }
  console.log(pos);
  console.log(duplicates);
  if (duplicates.length > 1) {
    console.log(duplicates.indexOf(Math.max(...duplicates)));
    return duplicates.indexOf(Math.max(...duplicates));
  } else {
    console.log(res.indexOf(Math.min(...res)));
    return res.indexOf(Math.min(...res));
  }
  console.log(res.sort());
  //   console.log());
}

bestMatch(
  [12, 12, 13, 14, 12, 9, 3, 11, 17, 6, 6, 12, 16, 11, 8, 11, 10, 14, 13],
  [10, 5, 10, 10, 7, 8, 1, 4, 10, 4, 4, 6, 6, 4, 0, 3, 2, 6, 8]
);
