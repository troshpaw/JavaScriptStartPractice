/** ЗАДАЧА 11 - Колбэк функция
 *
 * 1. Выведите в консоль "Привет, мир!" с задержкой 5 секунд
 *
 * 2. Используйте стрелочную функцию
 */

// method 1:
const helloWorld = () => console.log('Hello, world! Method one.')

setTimeout(helloWorld, 3000)

// method 2:
setTimeout(() => console.log('Hello, world! Method two.'), 1000)