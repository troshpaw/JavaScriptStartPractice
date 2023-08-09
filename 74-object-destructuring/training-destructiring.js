
const person = {
    name: 'Nick',
    age: 20,
    location: {country: 'Spain', city: 'Madrid'}
}

const infoForPerson = ({name: n, age: a, location: {country: country, city}}) => 
    ({n, a, country, city})

console.log(infoForPerson(person)) // {n: Nick, a: 20, country: Spain, city: Madrid}