
let greet = function (callback) {
    callback()
}
greet(function () {
    console.log('greet')
})

greet = callback => {
    callback()
}
greet(() => {
    console.log('greet')
})
greet(() => console.log('greet'))


let login = (userName, password, resolve, reject) => {
    if (userName === 'admin' && password === 'admin') {
        resolve('login success')
    } else {
        reject('login failed')
    }

}

login('admin', 'admin', status => console.log(status), err => console.log(err))

login('foo', 'bar', (status) => {
    console.log(status)
}, (err) => {
    console.log(err)
})