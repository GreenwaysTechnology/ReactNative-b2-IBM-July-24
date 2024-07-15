
//a=x
//b=y
function add(a, b) {
    return a + b
}
let x = 10
let y = 20
console.log(add(x, y))
console.log(add(20, 45))
////////////////////////////////////////////////////////////////////////////////////

//greet=hello
function sayGreet(greet) {
    greet()
}
let hello = function () {
    console.log('hello')
}
sayGreet(hello)
sayGreet(function () {
    console.log('hai')
})