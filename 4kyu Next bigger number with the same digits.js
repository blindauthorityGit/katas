function nextBigger(n) {
    console.log(n.toString().length);
    let arr = [];
    for (let i = 0; i < n.toString().length; i++) {
        arr.push(n.toString()[i]);
    }
    let numArr = n.toString().split("");
    console.log(arr);
    console.log(numArr.includes(arr.map(e => e)));
    const isIncluded = e => e;
    for (let i = n; i < 100; i++) {
        let numArr = i.toString().split("");
        if (numArr.includes(arr.map(e => e))) {
            console.log(i);
            break;
        }
    }
}

nextBigger(12);
