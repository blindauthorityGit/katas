sortme = function(names) {
  console.log(
    names.sort(function(a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    })
  );
  return names.sort(function(a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });
};

sortme(["Hello", "there", "I'm", "fine"]);
