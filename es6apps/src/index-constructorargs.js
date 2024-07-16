
class Employee {
    id
    name
    constructor(id = 1, name = 'Subramanian') {
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


emp= new Employee(2,'Ram')
console.log(emp)

console.log(`id ${emp.id}`)
console.log(`name ${emp.id}`)
console.log(`salary ${emp.calculateSalary()}`)
console.log(`Tax ${emp.calculateTax()}`)