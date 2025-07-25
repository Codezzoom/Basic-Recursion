// ITERATIVE
function printNameNTimes(n) {
    for (let i = 0; i < n; i++) {
        console.log("Ganu");
    }
}

// RECURSIVE
function printNameNTimes(n) {
    if (n > 0) {
        console.log("Ganu");
        printNameNTimes(n - 1);
    };
}

console.log(printNameNTimes(5));
