/** ЗАДАЧА 48 - Использование метода "reduce" для создания объекта
 *
 * 1. Создайте функцию "quantitiesByCategories" с одним параметром "products"
 *
 * 2. Эта функция должна возвращать объект с ключами,
 * равными категориям, и значениями,
 * равными сумме всех количеств в каждой категории
 */

const inputProducts = [
	{
		title: 'Phone case',
		price: 23,
		quantity: 2,
		category: 'Accessories',
	},
	{
		title: 'Android phone',
		price: 150,
		quantity: 1,
		category: 'Phones',
	},
	{
		title: 'Headphones',
		price: 78,
		quantity: 1,
		category: 'Accessories',
	},
	{
		title: 'Sport Watch',
		price: 55,
		quantity: 2,
		category: 'Watches',
	},
]

// Как работает функция?
const quantitiesByCategories = (inputProducts) => {
    return inputProducts.reduce((categories, product) => {
        const {category, quantity} = product

        categories[category] = (categories[category] || 0) + quantity

        console.log(categories)

        return categories
    }, {})
}

//console.log(quantitiesByCategories(inputProducts))
quantitiesByCategories(inputProducts)
/* {
  Accessories: 3,
  Phones: 1,
  Watches: 2
} */