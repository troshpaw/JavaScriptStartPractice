/** ЗАДАЧА 36 - Случайные числа
 *
 * 1. Cгенерируйте новое 4-значное случайное число.
 * Диапазон для случайного числа 1000 - 9999.
 *
 * 2. Убедитесь, что это новое случайное число не совпадает ни с одним из чисел в массиве myNumbers.
 *
 * 3. Если совпадает, вам нужно сгенерировать новое 4-значное число.
 *
 * 4. Если совпадений нет (новый номер уникален), добавьте его в массив myNumbers.
 *
 * ВАЖНО: В решении задачи используйте функции:
 *  - для генерации случайного числа в заданном диапазоне
 *  - для добавления случайного числа в массив с возвратом измененного массива
 */

const MIN = 1000
const MAX = 9999

// const MIN = 1
// const MAX = 10

const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351]
// const myNumbers = [1, 2, 3, 5, 7, 8, 9, 10]


const getRandomNumber = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min // максимум и минимум включаются
}

const addNumberToArray = (min, max) => {
    let randomNumber
    const updateArray = [...myNumbers]

    let i = 1

    do {
        randomNumber = getRandomNumber(min, max)
        console.log('Рандомное число ' + i + ' - ' + randomNumber)
        i++
    } 
    while (myNumbers.includes(randomNumber));

    console.log('Копия исходного массив: ' + updateArray)
    // console.log('Тип копии массива: ' + typeof updateArray)
    updateArray.push(randomNumber)
    console.log('Обновленная копия исходного массива: ' + updateArray)
    return updateArray
}

addNumberToArray(MIN, MAX)