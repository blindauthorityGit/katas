function hungrySeven(arr) {
    let str = arr.join("");
    for (let i = 0; i < arr.length; i++) {
        str = str.replace(/789/, "897");
    }
    return str.split("").map(elem => {
        return +elem;
    });
}
