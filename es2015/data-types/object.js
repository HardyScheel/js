// JavaScript objects can be thought of as simple collections of name-value pairs. As such, they are similar to:
// - Dictionaries in Python.
// - Hashes in Perl and Ruby.
// - Hash tables in C and C++.
// - HashMaps in Java.
// - Associative arrays in PHP.
//
// The "name" part is a JavaScript string, while the value can be any JavaScript value — including more objects. This allows you to build data structures of arbitrary complexity.

// two basic ways to create an empty object:

let obj1 = new Object() // {}
let obj2 = {} // {}

// The second is called 'object literal syntax' and is more convenient.
// This syntax is also the core of JSON format and should be preferred at all times.

// 'Object literal syntax' can be used to initialize an object:

let obj3 = {
  name: 'Carrot',
  details: {
    color: 'orange',
    size: 12
  }
}

// Attribute access can be chained together:

obj3.details.color // orange
obj3['details']['size'] // 12


//=====================
//===== Prototype =====
// ====================
// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object


// Create an object prototype(Person) and an instance of that prototype(you):

function Person (name, age) {
  this.name = name
  this.age = age
}

// Define an object:
let you = new Person('Horst', 24)

// Access the object:
obj3.name = 'Herbert'
let yourName = obj3.name

// Access with bracket notation:
obj3['name'] = 'Herbert'
yourName = obj3['name']


// Use a variable to define a key and then set a value.

var user = prompt('What is your key?')
obj3[user] = prompt('What is its value?')

function prompt (s) {
  let ret
  if (s === 'What is your key?') {
    ret = 'password'
  } else if (s === 'What is its value?') {
    ret = 'It\'s a secret'
  } else {
    ret = 'fail'
  }

  return ret
}

console.log(obj3)
