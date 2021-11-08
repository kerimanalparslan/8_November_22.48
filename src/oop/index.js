class Customer {
    constructor(id, customerNumber){
        this.id = id //prototyping
        this.customerNumber=customerNumber //prototyping
    }
}

let customer = new Customer(1,"12345");
//prototyping
customer.name= "murat kurtboğan"
console.log(customer.id)
console.log(customer.customerNumber)
Customer.bisey="bişey"
console.log(Customer.bisey)

class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
    this.firstName=firstName
}
}

class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
    this.companyName=companyName
    }
}