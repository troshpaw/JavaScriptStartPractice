/** ЗАДАЧА 72 - Копия массива
 *
 * Создайте копию массива.
 * При изменении копии массива оригинальный массив не должен изменяться
 */

const a = [1, 2, 3]

// 1 
// const b = [...a]

// 2 
// const b = Array.from(a)

// 3
const b = JSON.parse(JSON.stringify(a))

b.push('newElement')

console.log(a)
// [1, 2, 3]

console.log(b)
// [1, 2, 3, "newElement"]

