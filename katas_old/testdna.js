function DNAStrand(dna) {
  var dna = dna.toUpperCase();
  let char = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      char += "T";
    }
    if (dna[i] === "T") {
      char += "A";
    }
    if (dna[i] === "C") {
      char += "G";
    }
    if (dna[i] === "G") {
      char += "C";
    }
  }
  return char;
}

console.log(DNAStrand("ATACG"));
