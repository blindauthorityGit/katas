function moreZeros(s) {
    let arrUnique = [...new Set(s.split(""))];
    let res = [];
    arrUnique.forEach(e => {
        let one = 0;
        let zero = 0;
        e.charCodeAt(0)
            .toString(2)
            .split("")
            .forEach(x => {
                if (x == 1) {
                    one++;
                } else {
                    zero++;
                }
            });
        if (zero > one) {
            res.push(e);
        }
    });
    return res;
}
