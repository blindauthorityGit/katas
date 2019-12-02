var isSquare = function(n) {
  console.log(Math.sqrt(n) % 1);
  if (Math.sqrt(n) % 1 === 0 || 1) {
    return true;
  } else {
    return false;
  }
};

isSquare(36);
