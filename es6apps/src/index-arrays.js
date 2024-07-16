//array can hold any values- numbers,strings,objects, even another array

let names = ['subu', 'ram', 'chandan']

names.forEach(item => console.log(item))

let users = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
    { id: 3, name: 'c' },
    { id: 4, name: 'd' },
]
users.forEach(item => console.log(item.id, item.name))

const res = users.map(item => {
    return item.name.toUpperCase()
})
console.log(res)

const result = users.filter(item => item.name === 'a')
console.log(result)

const user = users.find(item => item.name === 'a')
console.log(user)

const savedUser = users.concat({ id: 4, name: 'abc' })
console.log(savedUser)
