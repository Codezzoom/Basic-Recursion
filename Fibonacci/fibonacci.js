// ITERATIVE
function fibonacci(n) {
    let F1 = 0;
    let F2 = 1;
    if (n === 1) return F1;
    if (n === 2) return F2;
    let fib = [F1, F2];
    for (let i = 1; i < n; i++) {
        let formula = fib[fib.length - 1] + fib[fib.length - 2];
        fib.push(formula);
    }
    return fib[fib.length - 1];
}

// RECURSIVE
function fibonacci(n) {
    if (n <= 1) return n;
    let first = fibonacci(n - 1);
    let last = fibonacci(n - 2);
    return first + last;
}

console.log(fibonacci(5));
console.log(fibonacci(6));
