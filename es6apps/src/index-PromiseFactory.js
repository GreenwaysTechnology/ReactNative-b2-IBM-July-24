//timer, ajax.

function blockMe(message) {
    console.log(message)
}
function sayHello() {
    //return Promise
    return Promise.resolve('Hello')
}
function getError() {
    return Promise.reject('oops')
}
function login(userName, password) {
    if (userName === 'admin' && password === 'admin') {
        return Promise.resolve('login success')
    }
    return Promise.reject('Login is failed')
}

function main() {
    blockMe('start')
    sayHello().then(res => console.log(res))
    getError().catch(err => console.log(err))
    login('admin', 'admin').then(res => console.log(res)).catch(err => console.log(err))
    login('hello', 'admin').then(res => console.log(res)).catch(err => console.log(err))

    blockMe('end')
}
main()