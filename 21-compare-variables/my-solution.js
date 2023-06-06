/** ЗАДАЧА 21 - Сравнение переменных
 *
 * 1. Сравните 2 переменные "myVariable1" и "myVariable2".
 * Выведите в консоль "true", если значение "myVariable1" меньше или равно "myVariable2".
 *
 * 2. Преобразуйте обе переменные в числа перед сравнением.
 */

// task 1:
let myVariable1 = 10
let myVariable2 = '5'

console.log(typeof parseInt(myVariable1))
console.log(typeof parseInt(myVariable2))

console.log(parseInt(myVariable1) <= parseInt(myVariable2))

// task 2:
myVariable1 = '20'
myVariable2 = 100

console.log(typeof parseInt(myVariable1))
console.log(typeof parseInt(myVariable2))

console.log(parseInt(myVariable1) <= parseInt(myVariable2))


// Вариант 2 конвертации строки в число
console.log(+'35')
console.log(typeof +'35')