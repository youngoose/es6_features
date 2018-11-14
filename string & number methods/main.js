"use strict"

let theString = 'Hello, my name is Eddy and I love JavaScript';

// startsWith()
// endsWith()
// includes()

/*
// true
console.log(theString.startsWith('Hello'));
// false
console.log(theString.startsWith('ello'));

// true
console.log(theString.endsWith('JavaScript'));
// false
console.log(theString.endsWith('JavaScri'));

// true
console.log(theString.includes('JavaScript'));
// false
console.log(theString.includes('love'));
// false
console.log(theString.includes('loves'));
*/

// Hex
console.log(0xFF); // 255
// Binary
console.log(0b101011); // 43
// Octal
console.log(0o543); // 355

// true
console.log(Number.isFinite(3));
console.log(Number.isFinite(-3));
console.log(Number.isNaN(NaN));
console.log(Number.isInteger(1));

// false
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(NaN));
console.log(Number.isNaN(1));
console.log(Number.isNaN('string'));
console.log(Number.isInteger(Infinity));
