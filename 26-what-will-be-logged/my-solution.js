/** ЗАДАЧА 26 - Что будет выведено в консоли
 *
 * Что будет выведено в консоли?
 * Ответьте на вопрос без запуска кода
 */

function fn() {
	console.log('Привет из функции fn')

	return function (a) {
		console.log(a)
	}
}

// fn() // Привет из функции fn

// console.log(fn())
/*
Привет из функции fn
[Function (anonymous)]
*/

// fn()()
/*
Привет из функции fn
undefined
*/

// console.log(fn()())
/*
Привет из функции fn
undefined
undefined
*/

fn()(true)
/*
Привет из функции fn
true
*/

// console.log(fn()(true))
/*
Привет из функции fn
true
undefined
*/