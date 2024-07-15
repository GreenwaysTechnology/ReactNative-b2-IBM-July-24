
//if fun has only one line of code, we can remove {}
let hello = (message) => console.log(message)
hello('hello')

//args with default
hello = (message = 'hello') => console.log(message)
hello('hello')

let add = (a = 0, b = 0) => {
    return a + b
}
console.log(add(1, 2))

//if function has only return statement:can remove return and {}
add = (a = 0, b = 0) => a + b

console.log(add(1, 2))

//if function has single arg, no default value,return the same :can remove return and {}
//()

let doubleIt = value => value * 2

console.log(doubleIt(10))

