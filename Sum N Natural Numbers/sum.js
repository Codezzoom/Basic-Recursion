// ITERATIVE
function sum(n) {
    let s = 0;
    for (let i = 0; i < n; i++) {
        s += i;
    }
    return s;
}

// RECURSIVE
function sum(n) {
    if (n === 0) {
        return 0;
    }
    return n + sum(n - 1);
}

console.log(sum(5));
console.log(sum(6));
