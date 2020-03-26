function filter_list(l) {
    l.forEach(e => {
        if (typeof e == "number") {
            console.log(e);
        }
    });

    console.log(l.filter(e => typeof e == "number"));
}

filter_list([1, 2, "aasf", "1", "123", 123]);
