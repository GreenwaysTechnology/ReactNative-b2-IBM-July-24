//function as value

//x is variable
//10 is value/literal numeric or number 
let x = 10

//hello is just variable : anonymous function
let hello = function () {
    console.log('hello')
}
hello()

//anonymous function - args and return value
let add = function (a = 0, b = 0) {
    return a + b
}

console.log(add(10,10))

