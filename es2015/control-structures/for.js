for (let i = 0; i <= 3; ++i) {
  console.log(i)
}

// for...of is for arrays. Do something with every field of an array.
let myForOfArray = ['a', 'b', 'c', 9]

for (let value of myForOfArray) {
  console.log(value)
}

// for...in is for objects. Do something with every property in an object.
let myForInObject = { title: 'a title', detail: 'a detail', color: 'the color', bool: true }

for (let value in myForInObject) {
  console.log(value)
}
