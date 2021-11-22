import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import { users } from "../data/users.js"
import Customer from "../modals/customer.js"
import User from "../modals/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)


let user1 = new User(1,"engin","demiroğ","ankara");
let user2 = new User(2,"baran","gökçelikli","muğla");

userService.add(user1)
userService.add(user2)

//console.log(userService.list())
//console.log(userService.getById(2))

//userService.list()
//userService.getById()



let customer = { id: 1, firstName: "Engin" }

customer.lastName = "Demiroğ"

console.log(customer.lastName)

console.log("-----------------")
userService.load()

let customerToAdd = new Customer(1,"Seda","Yılmaz","Ankara",25);
customerToAdd.type = "customer"

userService.add(new Customer(1,"Seda","Yılmaz","Ankara",25))
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomerSorted())