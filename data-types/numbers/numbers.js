// JavaScript only knows double precicion 64-bit floating point numbers.

let addition = 0.1 + 0.2; // 0.30000000000000004 (type: 64 bit floating point)

// Convert string to an integer. Using radix/base 10.:
let int = parseInt("99.9", 10); // 99

// Convert binary digits as String to integer. Using radix/base 2.
let bin = parseInt("1101", 2); // 13

// Convert String to floating piont Number
let float = parseFloat("432.00"); // 432.99

// parseInt() and parstFloat() recongnize only the first digits not other letters.
let test = parseFloat("89.8abC5"); // 89.8

// Proof if it is not a number (NaN).
isNaN(NaN); // true
isNaN(99); // false
isNaN(int); // false

let iamInfinity = 1 / 0; //  Infinity
let iamNegativInfinity = -1 / 0; // -Infinity
let amIFinite = isFinite(int); // true
let amIFiniteToo = isFinite(iamInfinity); // false
let isNaNFinite = isFinite(NaN); // false

/**
 * Convert type String to a Number as integer.
 * The radix or base is 10.
 * @param {string} s - The String of digits.
 */
function convertStringToInt(s) {
    return parseInt(s, 10);
}

/**
 * Convert binary digits to integer. Using radix/base 2.
 * @param {string} bin - The binary digits as a String.
 */
function convertBinToInt(bin) {
    return parseInt(bin, 2);
}

console.log(convertStringToInt("84321.98403214")); // 84321
console.log(convertBinToInt("11101")); // 29