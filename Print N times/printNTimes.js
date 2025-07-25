// ITERATIVE
function printNTimes(n) {
    for (let i = 0; i <= n; i++) {
        console.log(i);
    }
}

// RECURSIVE
// Print 0 - 3
function printNTimes(n) {
    if (n >= 0) {
        printNTimes(n - 1);
        console.log(n);
        return 0;
    }
}

function printNTimes(n) {
    if (n === -1) return 0;
    printNTimes(n - 1);
    console.log(n);
}

console.log(printNTimes(3));
