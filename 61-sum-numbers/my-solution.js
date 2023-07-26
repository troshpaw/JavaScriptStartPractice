/** ЗАДАЧА 61 - Сумма чисел
 *
 * 1. Создайте функцию "sumNumbers", которая будет суммировать все переданные ей аргументы.
 * Количество аргументов неизвестно
 *
 * 2. Используйте console.log внутри функции для вывода результата
 *
 * 3. Также верните эту сумму как результат функции
 */

const sumNumbers = (...args) => {
    const sum = args.reduce((prev, current) => prev + current)
    console.log(sum)
    return sum
}


/* Решение с помощью обычной функции (использеется "arguments")
function sumNumbers() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      console.log(arguments[i])
    }
}
*/

sumNumbers(1, 2, 3)