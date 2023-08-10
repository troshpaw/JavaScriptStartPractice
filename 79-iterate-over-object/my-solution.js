/** ЗАДАЧА 79 - Перебор свойств объекта
 *
 * 1. Создайте функцию "sumObjectValues", которая будет суммировть
 * все значения свойств, которые являются числами.
 *
 * 2. Сумму чисел необходимо вернуть из функции
 *
 * 3. Убедитесь, что итерация выполняется только
 * по собственным свойствам объекта
 */

const objectWithNumbers = {
	a: 10,
	b: 20,
	c: 'string',
	d: 12,
}

// method 1:
const sumObjectValues = (object) => {
    let sum = 0
    for (let property in object) {
        if (typeof object[property] === 'number') {
            console.log(property, '=', object[property])
            sum += object[property]
        }
    }
    return sum
}

const result = sumObjectValues(objectWithNumbers)
console.log('sum =', result)
//42