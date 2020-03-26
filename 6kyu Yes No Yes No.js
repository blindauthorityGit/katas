function yesNo(arr) {
    const res = [];
    for (let i = 0; arr.length; i = (i + 1) % arr.length) console.log(arr[i]);
    res.push(arr.splice(i, 1)[0]);
    return res;
}

yesNo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
