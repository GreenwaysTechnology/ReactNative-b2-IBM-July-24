
function sayHello(name='Your name') {
   // console.log(`Name ${name}`)
   return `Name ${name}`
}

//values
console.log(sayHello('Subramanian'))
console.log(sayHello())

function add(a=0, b=0) {
   return a + b
}

console.log(add(10, 10))
console.log(add())