function inviteMoreWomen(L) {
  let sum = L.reduce((a, b) => a + b);
  if (sum > 0) {
    return true;
  } else {
    return false;
  }
}
