//object destructuring: es 6 feature

// function printEmployee(emp) {
//     console.log(`Id : ${emp.id}`)
//     console.log(`Name : ${emp.name}`)
//     console.log(`City : ${emp.address.city}`)
// }

// function printEmployee(emp) {
//     //destructure
//     const { id, name, address } = emp
//     console.log(`Id : ${id}`)
//     console.log(`Name : ${name}`)
//     console.log(`City : ${address.city}`)
// }


// function printEmployee(emp) {
//     //destructure
//     const { id, name, address: { city } } = emp
//     console.log(`Id : ${id}`)
//     console.log(`Name : ${name}`)
//     console.log(`City : ${city}`)
// }

// function printEmployee({ id, name, address: { city } }) {
//     console.log(`Id : ${id}`)
//     console.log(`Name : ${name}`)
//     console.log(`City : ${city}`)
// }
const printEmployee = ({ id, name, address: { city } }) => {
    console.log(`Id : ${id}`)
    console.log(`Name : ${name}`)
    console.log(`City : ${city}`)
}
let employee = {
    id: 1,
    name: 'Subramanian',
    address: {
        city: 'Coimbatore'
    }

}
printEmployee(employee)
////////////////////////////////////////////////////////////////////////////////////////

//return object and destructuring

// function getStock() {
//     return {
//         id: 1,
//         symbol: 'google',
//         qty: 100,
//         price: 1000
//     }
// }
// console.log(getStock())


//dynamic object properties
// function getStock(id = 1, symbol = 'google', qty = 0, price = 0) {
//     return {
//         id: id,
//         symbol: symbol,
//         qty: qty,
//         price: price
//     }
// }
// console.log(getStock(2, 'meta', 3, 3445))
// console.log(getStock())

//apply descturing syntax
// function getStock(id = 1, symbol = 'google', qty = 0, price = 0) {
//     //left:right is same
//     //key:value is same
//     //you can descture, make it as one
//     return {
//         id,
//         symbol,
//         qty,
//         price
//     }
// }
// console.log(getStock(2, 'meta', 3, 3445))
// console.log(getStock())


// const getStock = (id = 1, symbol = 'google', qty = 0, price = 0) => {
//     return {
//         id,
//         symbol,
//         qty,
//         price
//     }
// }

const getStock = (id = 1, symbol = 'google', qty = 0, price = 0) => ({
    id,
    symbol,
    qty,
    price
})


console.log(getStock(2, 'meta', 3, 3445))
console.log(getStock())












