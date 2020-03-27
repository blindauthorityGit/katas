function twosDifference(input) {
    let arr = input.sort((a, b) => a - b);
    console.log(arr);
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + 2 == arr[j]) {
                res.push([arr[i], arr[j]]);
            }
        }
    }
    console.log(res[1]);
    return res;
}

twosDifference([4, 1, 2, 3]);
