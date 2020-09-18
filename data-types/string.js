// Strings are a sequence of unicode characters (UTF-16 codeunit). Strings can be used as objects. They have methods to manipulate them and also to get infos.

let whatIsTheLength = 'hello'.length; // 5
'hello'.charAt(0); // "h"
'hello, world'.replace('hello', 'goodbye'); // "goodbye, world"
'hello'.toUpperCase(); // "HELLO"

console.log(whatIsTheLength);