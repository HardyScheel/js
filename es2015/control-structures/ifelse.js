console.log(myIfElseLoop())

function myIfElseLoop () {
  let name = 'kittens'

  if (name === 'puppies') {
    name += ' woof'
  } else if (name === 'kittens') {
    name += ' meow'
  } else {
    name += '!'
  }

  return name === 'kittens meow'
}

const ifElseTester = 2 // use: 0, 1 or 2

if (ifElseTester == true) {
  console.log(true)
} else if (ifElseTester == false) {
  console.log(false)
} else {
  console.log('else')
}
