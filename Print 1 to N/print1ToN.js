// ITERATIVE
function factorial(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

// RECURSIVE
function print1ToN(n) {
    if (n > 0) {
        print1ToN(n - 1);
        console.log(n);
    }
    return;
}

console.log(print1ToN(10));
