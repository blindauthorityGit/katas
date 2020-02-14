function likes(names) {
  let len = names.length;
  let others = names.length - 3;
  console.log(len);
  if (len === 0) {
    return "no one likes this";
  }
  if (len === 1) {
    return names[0] + " likes this";
  }
  if (len === 2) {
    return names[0] + " and " + names[1] + " likes this";
  }
  if (len === 3) {
    return names[0] + " ," + names[1] + " and " + names[2] + " likes this";
  }
  if (len === 4) {
    return (
      names[0] +
      " ," +
      names[1] +
      " ," +
      names[2] +
      " and " +
      others +
      " other like this"
    );
  }
  if (len > 4) {
    return (
      names[0] +
      " ," +
      names[1] +
      " ," +
      names[2] +
      " and " +
      others +
      " others like this"
    );
  }
}

console.log(likes(["Lukas", "Hans", "Peter", "Monika", "Petra"]));
