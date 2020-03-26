function list(names) {
    let res = [];

    for (let i = 0; i < names.length; i++) {
        if (names[i + 2] != undefined) {
            res.push(names[i].name + ", ");
        } else if (names[i + 2] == undefined && names[i + 1] != undefined) {
            res.push(names[i].name + " & ");
        } else if (names[i + 1] == undefined) {
            res.push(names[i].name);
        }
    }
    console.log(res.join(""));
    return res.join("");
}

list([{ name: "Bart" }, { name: "Lisa" }]);
