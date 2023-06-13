/** ЗАДАЧА 35 - Итерация по свойствам объекта
 *
 * 1. Переберите все собственные свойства объекта
 *
 * 2. Если имя свойства (ключ) равно "key1" или "key3",
 * выведите значение свойства в консоль.
 */

const myObject = {
	key1: true,
	key5: 10,
	key3: 'abc',
	key4: null,
	key10: NaN,
}

// Method 1:
/*
for (let key in myObject) {
    if (key === 'key1' || key === 'key3') {
        console.log(myObject[key])
    }    
}
*/

// Method 2:
const arrMyObject = Object.keys(myObject)
//console.log(arrMyObject)

arrMyObject.forEach((key) => {
    if (key === 'key1' || key === 'key3') {
        console.log(myObject[key])
    }  
})