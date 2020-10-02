// false, 0, empty Strings (""), NaN, null, and undefined will be 'false'.
// Everythings else will be 'true'.

let iamBool1 = false

let iamBool2 = Boolean(false) // false
let iamBool3 = Boolean(0) // false
let iamBool4 = Boolean('') // false
let iamBool5 = Boolean(NaN) // false
let iamBool6 = Boolean(null) // false
let iamBool7 = Boolean(undefined) // false

let iamBool8 = Boolean(234) // true

console.log(false)
