/*
const person = {
    name: 'Nick',
    age: 20,
    location: {country: 'Spain', city: 'Madrid'}
}

const infoForPerson = ({name: n, age: a, location: {country: country, city}}) => 
    ({n, a, country, city})

console.log(infoForPerson(person)) // {n: Nick, a: 20, country: Spain, city: Madrid}
*/

// Ex. 2:
const customer = {
    name: 'Sherlock',
    email: 's.h.@gmail.com',
    age: 34,
    address: {
        streetNo: '221b Baker Street',
        city: 'London',
        country: 'UK'
    }
}

const {name: nameCustomer, age: ageCustomer, address: {streetNo: streetNoCustomer, city: cityCustomer}} = customer

console.log(nameCustomer) // Sherlock
console.log(streetNoCustomer) // 221b Baker Street
console.log(cityCustomer) // UK