
str = "0P"

// Version 1: Using a single variable loop
const isPalindrome = function(str) {
    str = str.replace(/[\W_]/gi, ``).toLowerCase()
    for (let i=0; i<str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        }
    }
    return true
};

console.log(isPalindrome(str))

// Version 2: Using a double variable loop
const isPalindromeVersion2 = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/gi,'');
    for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
        if (s.charAt(i) !== s.charAt(j)) return false;
    }
    return true
};

console.log(isPalindromeVersion2(str))

