//timer, ajax.

function blockMe(message) {
    console.log(message)
}

function sayHello() {
    return new Promise((resolve, reject) => {
        //any async api
        setTimeout(resolve, 1000, 'Hello')
    })

}


function main() {
    blockMe('start')
    sayHello()
        .then(res => console.log(res))
        .catch(err => console.log(err))
    blockMe('end')
}
main()