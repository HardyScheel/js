// Blocks do not have a scope. Only functions have a scope.

// let is a block-level variable. The declared variable
// is available from the block it is enclosed in.

    // myLetVariable is *not* visible out here

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
    // myLetVariable is only visible in here
}

    // myLetVariable is *not* visible out here


//----------------------------------------------
//----------------------------------------------

// const allows you to declare variables whose values are never
// intended to change. The variable is available from the block it is declared in.

const Pi = 3.14; // variable Pi is set 
Pi = 1; // will throw an error because you cannot change a constant variable.


//----------------------------------------------
//----------------------------------------------


// var is available from the function it is declared in.

    // myVarVariable *is* visible out here

for (var myVarVariable = 0; myVarVariable < 5; myVarVariable++) { 
    // myVarVariable is visible to the whole function 
} 
  
    // myVarVariable *is* visible out here