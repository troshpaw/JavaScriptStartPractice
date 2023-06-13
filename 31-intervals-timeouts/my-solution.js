/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */

let i = 1

const printMessage = setInterval(() => {
    console.log('Message number ' + i)
    i += 1
}, 2000);

// setTimeout(clearInterval(printMessage), 11000)

setTimeout(() => clearInterval(printMessage), 11000)

// console.log(i)

// setTimeout(() => console.log(i), 12000)