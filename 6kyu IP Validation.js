function isValidIP(str) {
    let arr = str.split(".");
    console.log(arr.length);
    if (arr.length != 4) {
        return false;
    }
    for (let i = 0; i < arr.length; i++) {
        if (/^\d+$/.test(arr[i])) {
            parseInt(arr[i], 10);
            if (arr[i] < 0 || arr[i] > 255) {
                console.log("foisch");
                return false;
            }
        }
    }

    console.log(arr);
    return true;
}

isValidIP("137.56.256.100");
