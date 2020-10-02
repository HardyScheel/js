// @ts-nocheck

// The && and || operators use short-circuit logic,
// which means whether they will execute their second
// operand is dependent on the first. This is useful for
// checking for null objects before accessing their attributes:

let o = { name: 'Just a name', getName () { return this.name } }

// o = null
let name = o && o.getName()

console.log(name)


// || operator is good for caching values (when falsy values are invalid):

let oo = { name: 'Just a name', getName() { return this.name } }

let oName = oo || (oo = getName())

console.log(oName)


// ===================================
// ===================================


// ternary operator for conditional expressions

let age = 17
let allowed = (age > 18) ? 'yes' : 'no'
console.log(allowed)
