function to_nato(words) {
  let nato = {
    a: "Alfa",
    b: "Bravo",
    c: "Charlie",
    d: "Delta",
    e: "Echo",
    f: "Foxtrot",
    g: "Golf",
    h: "Hotel",
    i: "India",
    j: "Juliett",
    k: "Kilo",
    l: "Lima",
    m: "Mike",
    n: "November",
    o: "Oscar",
    p: "Papa",
    q: "Quebec",
    r: "Romeo",
    s: "Sierra",
    t: "Tango",
    u: "Uniform",
    v: "Victor",
    w: "Whiskey",
    x: "Xray",
    y: "Yankee",
    z: "Zulu"
  };
  let wordsArray = [...words];
  return wordsArray
    .filter(letter => letter !== " ")
    .map(letter => {
      if (/[^a-z]/.test(letter.toLowerCase())) {
        return letter;
      } else {
        return nato[letter.toLowerCase()];
      }
    })
    .join(" ");
}

// to_nato('If you can read')
//"India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta");
to_nato("Did not see that coming");
// "Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf");
// to_nato('go for it!')
// "Golf Oscar Foxtrot Oscar Romeo India Tango !");
