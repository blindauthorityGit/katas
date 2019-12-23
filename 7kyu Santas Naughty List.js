function findChildren(santasList, children) {
  var ans = [];
  for (var i = 0; i < santasList.length; ++i)
    for (var j = 0; j < children.length; ++j)
      if (ans.indexOf(children[j]) == -1 && santasList[i] == children[j])
        ans.push(children[j]);
  return ans.sort();
}
