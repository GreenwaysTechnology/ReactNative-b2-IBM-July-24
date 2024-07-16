let employee = {
    id: 1,
    name: 'Subramanian',
    //has-a
    address: {
        city: 'Coimbatore'
    }
}
console.log(`Id ${employee.id}`)
console.log(`Name ${employee.name}`)
console.log(`Name ${employee.address.city}`)