// ITERATIVE
function factorial(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}

// RECURSIVE
function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));
