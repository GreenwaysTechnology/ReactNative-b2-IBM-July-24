class Address {
    city
    constructor(city = 'city') {
        this.city = city
    }
}
class Employee {
    id
    name
    address
    constructor(id = 0, name = 'name', address = new Address('city')) {
        this.id = id
        this.name = name
        this.address = address
    }
}
let emp = new Employee(1, 'Subramaian', new Address('coimbatore'))
console.log(`id ${emp.id}`)
console.log(`name ${emp.name}`)
console.log(`city ${emp.address.city}`)
