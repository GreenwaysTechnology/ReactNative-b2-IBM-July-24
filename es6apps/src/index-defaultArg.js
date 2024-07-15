//name is arg
//default arg
function sayHello(name='Your name') {
    console.log(`Name ${name}`)
}

//values
sayHello('Subramanian')
sayHello()

function add(a=0, b=0) {
    let c = a + b
    console.log(c)
}

add(10, 10)
add()