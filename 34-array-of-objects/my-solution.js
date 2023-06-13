/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

cars = [
    {
        carBrand: 'VAZ', 
        price: 100, 
        isAvailableForSale: false
    }, 
    {   
        carBrand: 'GAZ', 
        price: 110, 
        isAvailableForSale: true
    }, 
    {
        carBrand: 'UAZ', 
        price: 120, 
        isAvailableForSale: false
    }
]

cars.push({carBrand: 'TAZ', price: 120, isAvailableForSale: true})

console.log(cars)