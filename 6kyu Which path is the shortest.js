function shortestPath(work, home, a, b) {
  let worksum = work.reduce(function(x, y) {
    return x + y;
  });
  let homesum = home.reduce(function(x, y) {
    return x + y;
  });
  let asum = a.reduce(function(x, y) {
    return x + y;
  });
  let bsum = b.reduce(function(x, y) {
    return x + y;
  });

  console.log(asum);
  if (homesum - asum - home < homesum - bsum - homesum) {
    return homesum - asum - home;
  } else {
    return homesum - bsum - home;
  }
  console.log(worksum);
  //your code here
}

shortestPath([17, 35], [8, 17], [13, 28], [12, 26]);
