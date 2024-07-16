
const getUser = () => {
    console.log('getUser is called')
    return new Promise((resolve, reject) => {
        let user = {
            name: 'admin'
        }
        if (user) {
            setTimeout(resolve, 1000, user)
        } else {
            setTimeout(reject, 1000, 'user not found')
        }
    })
}
const login = user => {
    console.log('login is called')
    return new Promise((resolve, reject) => {
        if (user.name === 'admin') {
            setTimeout(resolve, 1000, 'login success')
        } else {
            setTimeout(reject, 1000, 'login failed')
        }
    })
}
const showdashboard = status => {
    console.log('showdashboard is called')
    return new Promise((resolve, reject) => {
        if (status === 'login success') {
            setTimeout(resolve, 1000, 'Welcome to Admin')
        } else {
            setTimeout(reject, 1000, 'Welcome to Guest')
        }
    })
}

function main() {
    // getUser((user) => {
    //     //calling login
    //     login(user, (status) => {
    //         //calling show dashboard
    //         showdashboard(status, (page) => {
    //             console.log(page)
    //         }, (err) => {
    //             console.log(err)
    //         })
    //     }, (err) => {
    //         console.log(err)
    //     })
    // }, (err) => {
    //     console.log(err)
    // })
    // getUser()
    //     .then(user => {
    //         return login(user)
    //     })
    //     .then(status => {
    //         return showdashboard(status)
    //     })
    //     .then(res => {
    //         console.log(res)
    //     })
    //     .catch(err => console.log(err))

    getUser()
        .then(user => login(user))
        .then(status => showdashboard(status))
        .then(res => console.log(res))
        .catch(err => console.log(err))
}
main()