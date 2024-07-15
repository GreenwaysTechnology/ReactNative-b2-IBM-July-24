
//greet=hello
function sayGreet(greet) {
    greet('hello')
}
let hello = function (message) {
    console.log(message)
}
sayGreet(hello)
sayGreet(function (message) {
    console.log(message)
})