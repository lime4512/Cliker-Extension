let btn = document.getElementById('btn')

let number = 0
btn.onclick = function addNumber() {
	number += 1
	let element = document.getElementById('check') // Получаем элемент по его id
	element.innerHTML = number
}
