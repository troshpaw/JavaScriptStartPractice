/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

const myName = 'Pavel'
const mySurname = 'Troshin'
const myProfession = 'programmer'

// method 1:
const infoForMe1 = `My name ${myName} ${mySurname} and i'm a ${myProfession}.`
console.log(infoForMe1)

// method 2:
const infoForMe2 = "My name " + myName + " " + mySurname + " and i'm a " + myProfession + "."
console.log(infoForMe2)