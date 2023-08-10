/** ЗАДАЧА 76 - Поменять местами значения двух переменных
 *
 * Поменяйте местами значения переменных "a" и "b".
 * Не используйте для этого какие-либо новые переменные.
 */

let a = 'first'
let b = 'second'

// console.log(a, b)
// first second

;[b, a] = [a, b]

console.log('a:', a)
console.log('b:', b)
// second first