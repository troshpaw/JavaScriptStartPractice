/** ЗАДАЧА 55 - Деструктуризация результата функции
 *
 * 1. Создайте функцию "minMax", которая принимает любое количество аргументов
 *
 * 2. Эта функция должна возвращать массив из двух элементов:
 *  - Первый элемент массива - минимальное значение среди всех аргументов.
 *  - Второй элемент массива - это максимальное значение среди всех аргументов.
 */

let min, max

// const array = [24, 5, 34, 10]

const minMax = (...array) => {
    array.sort((a, b) => a - b)
    return [array[0], array[array.length - 1]]
}

/*
function minMax(...nums) {
    return [Math.min(...nums), Math.max(...nums)]
}
*/

;[min, max] = minMax(24, 5, 34, 10)
/* Вызовите здесь функцию "minMax" с аргументами 24, 5, 34, 10 
и используя деструктуризацию массивов присвойте значения переменным "min" и "max" */
console.log(min, max) // 5, 34

;[min, max] = minMax(18, 23, 103, 70, 80, 25)
/* Вызовите здесь функцию "minMax" еще раз с аргументами 18, 23, 103, 70, 80, 25 */
console.log(min, max) // 18, 103


// Пример деструктуризации массива
const anyString = 'JavaScript is programming language'
let [oneElemement, twoElemement, threeElemement] = anyString.split(' ')

console.log(oneElemement)
console.log(twoElemement)
console.log(threeElemement)