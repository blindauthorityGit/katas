function sabb(x, val, happ) {
    let counter = 0;
    let arr = "sabticl".split("");
    for (let i = 0; i < x.split("").length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (x.split("")[i] == arr[j]) {
                counter++;
            }
        }
    }
    if (counter + val + happ > 22) {
        return "Sabbatical! Boom!";
    } else {
        return "Back to your desk, boy.";
    }
}
