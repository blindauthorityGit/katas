function interleave() {
  let args = [];
  let argLen = [];
  let res = [];

  for (let e in arguments) {
    argLen.push(arguments[e].length);
    args.push(arguments[e]);
  }

  let maxL = argLen.sort((a, b) => b - a)[0];

  for (let i = 0; i < maxL; i++) {
    for (let k = 0; k < args.length; k++) {
      if (args[k][0] === undefined) {
        res.push(null);
      } else {
        let first = args[k].shift();
        res.push(first);
      }
    }
  }
  console.log(res);
  return res;
}

interleave([1, 2, 3], ["c", "d", "e"], [8, 9, 10, 11]);
