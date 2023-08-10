/** ЗАДАЧА 75 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

let vowelsCount = 0
const vowels = ['a', 'e', 'i', 'o', 'u']

const str = 'Today is the best day of my life'

/* method 1:
const countVowels = (str, vowels) => {
    str.split('').forEach((symbol) => {
        if (vowels.includes(symbol)) {
            vowelsCount ++
        }
    })    
}
*/

// method 2:
const countVowels = (str, vowels) => {
    for (const symbol of str) {
        if (vowels.includes(symbol)) {
            vowelsCount += 1
        }
    }
}

countVowels(str, vowels)

console.log(vowelsCount)
// 9

