//callback chaining

const getUser = (resolve, reject) => {
    console.log('getUser is called')
    let user = {
        name: 'admin'
    }
    //error
    //user = null
    if (user) {
        setTimeout(resolve, 1000, user)
    } else {
        setTimeout(reject, 1000, 'user not found')
    }
}
const login = (user, resolve, reject) => {
    console.log('login is called')
    if (user.name === 'admin') {
        setTimeout(resolve, 1000, 'login success')
    } else {
        setTimeout(reject, 1000, 'login failed')
    }
}
const showdashboard = (status, resolve, reject) => {
    console.log('showdashboard is called')
    if (status === 'login success') {
        setTimeout(resolve, 1000, 'Welcome to Admin')
    } else {
        setTimeout(reject, 1000, 'Welcome to Guest')
    }
}

function main() {
    getUser((user) => {
        //calling login
        login(user, (status) => {
            //calling show dashboard
            showdashboard(status, (page) => {
                console.log(page)
            }, (err) => {
                console.log(err)
            })
        }, (err) => {
            console.log(err)
        })
    }, (err) => {
        console.log(err)
    })
}
main()