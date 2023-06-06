/** ЗАДАЧА 23 - ИЛИ и И операторы
 *
 * Что будет выведено в консоль?
 */

console.log(3 || (true && null) || false) // 3

// Step 1:
console.log(true && null) // null
// Step 2:
console.log(3 || null || false) // 3 