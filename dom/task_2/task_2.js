// В HTML-документе есть тег <p> c идентификатором title. Напишите скрипт, который создает новый элемент <h2> в переменной new_element с текстовым содержимым Сегодня солнечно, минус 15 и добавляет новый элемент сразу после тега с идентификатором title.

// Пример результата:
// <p id=”title”>О погоде<p>
// Пример результата:
// <p id=”title”>О погоде<p>
// <h2>Сегодня солнечно, минус 15</h2>

let title = document.getElementById('title')
let new_element = document.createElement('h2')
function addAfterEL() {
new_element.innerText = 'Сегодня солнечно, минус 15'

title.after(title,new_element)
}

addAfterEL()