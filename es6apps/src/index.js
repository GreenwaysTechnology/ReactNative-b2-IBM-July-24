import { firstName, lastName } from "./lib/util.js";
import Customer from "./lib/Customer.js";

console.log(firstName,lastName)
let cust = new Customer()
console.log(cust.findAll())