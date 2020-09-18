// The switch statement can be used for multiple branches based on a number or string:
// If you don't add a break statement, execution will "fall through" to the next level. Add a comment "fallthrough" for better debugging
// Default case is optional.

let actionCase = 'eat';

switch (actionCase) {
    case 'eat':
        console.log('eating');
        break;
    case 'draw':
        console.log('drawing');
        break;
    default:
        console.log('i am doing nothing');
        break;
}



let numberCase = 1;

switch (numberCase) {
    case 1:                 // fallthrough
        console.log(1);
    case 2:
        console.log(2);
    default:
        console.log('default');
}



function yay() {console.log('yay');}
function nothing() {console.log('nothing');}

switch (1 + 3) {
    case 2 + 2:
        yay();
        break;
    default:
        nothing();
}
