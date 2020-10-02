// Arrays in JavaScript are actually a special type of object.
// They work very much like regular objects but they have one magic property called 'length'. 

// One way of creating arrays is as follows:
var a = new Array()
a[0] = 'dog'
a[1] = 'cat'
a[2] = 'hen'
console.log(a.length) // 3

// A more convenient notation is to use an array literal:
var b = ['dog', 'cat', 'hen']
console.log(b.length) // 3

// If you query a non-existent array index, you'll get a value of undefined in return:
typeof b[5] // undefined
