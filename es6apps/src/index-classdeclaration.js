//class declaration

class Employee {
    id
    name
    constructor(id, name) {
        this.id = id 
        this.name = name
    }

    //methods
    calculateSalary() {
        return 100
    }
    calculateTax = () => {
        return 10
    }
}
let emp = new Employee()
console.log(emp)

console.log(`id ${emp.id}`)
console.log(`name ${emp.id}`)
console.log(`salary ${emp.calculateSalary()}`)
console.log(`Tax ${emp.calculateTax()}`)