function highestRank(arr) {
    let newArr = [...new Set(arr)];
    let res = [];
    for (let i = 0; i < newArr.length; i++) {
        let counter = 0;
        for (let j = 0; j < arr.length; j++) {
            if (newArr[i] == arr[j]) {
                counter++;
            }
        }
        res.push(counter);
    }
    let max = res.indexOf(Math.max(...res));
    return newArr[max];
}

highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]);
