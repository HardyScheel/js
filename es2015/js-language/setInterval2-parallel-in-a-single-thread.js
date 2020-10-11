// Two function calls in one thread. They work in parallel on one thread.

var i = 0
setInterval(function () {
  console.log(i++)
}, 3000)

setInterval( function() {
  console.log('World')
}, 1000)

console.log('Hello')
