/** ЗАДАЧА 37 - Цикл "for .. in"
 *
 * Внутри цикла "for .. in" перед выводом значения свойства в консоль
 * выполните проверку того, что свойство является
 * собственным свойством объекта
 */

const myObject = {
	name: 'Mike',
	age: 30,
	city: 'London',
}

Object.prototype.country = 'England'

const myObjectTwo = {
	name: 'Nick',
	age: 20,
	city: 'LA',
}

for (let key in myObject) {
    if (myObject.hasOwnProperty(key)) {
        console.log(myObject[key])
    }
	
}

