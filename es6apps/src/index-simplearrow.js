
let hello = function () {
    console.log('hello')
}
hello()

//arrow
hello = () => {
    console.log('hello')
}
hello()
//if fun has only one line of code, we can remove {}
hello = () => console.log('hello')
hello()
