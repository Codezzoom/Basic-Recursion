// ITERATIVE
function printNTimes(n) {
    for (let i = n; i >= 0; i--) {
        console.log(i);
    }
}

// RECURSIVE
function printNTo1(n) {
    if (n > 0) {
        console.log(n);
        printNTo1(n - 1);
    }
    return;
}

console.log(printNTo1(10));
