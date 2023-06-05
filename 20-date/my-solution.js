/** ЗАДАЧА 20 - Дата
 *
 * 1. Создайте переменную и присвойте ей текущее время в миллисекундах
 *
 * 2. Выведите значение в консоль
 */

// method 1 (просто текущее время):
const currentDate = Date()
console.log(currentDate)

// method 2:
const currentDateTwo = new Date()
console.log(currentDateTwo)

const currentDateInMs = currentDateTwo.getTime()
console.log(currentDateInMs)
