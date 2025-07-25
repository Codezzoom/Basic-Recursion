// ITERATIVE
function palindrome(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - 1 - i]) return false;
    }
    return true;
}

// RECURSIVE
function palindrome(st, str) {
    if (st === str.length) return true;
    if (str[st] !== str[str.length - 1 - st]) return false;
    return palindrome(st + 1, str);

}

console.log(palindrome(0, "ABCDCBA"));
console.log(palindrome(0, "TAKE U FORWARD"));
console.log(palindrome(0, "nitin"));
console.log(palindrome(0, "madam"));
