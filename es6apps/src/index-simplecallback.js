//timer, ajax.

function blockMe(message) {
    console.log(message)
}
function sayHello(callback) {
    // setTimeout(callback, 5000,'welcome')
    setTimeout(() => {
        callback('hello')
    }, 1000)
}

function main() {
    blockMe('start')
    sayHello(function (data) {
        console.log(data)
    })
    blockMe('end')
}
main()