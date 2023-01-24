// В HTML-документе задан тег <ul> c элементами <li> внутри. Напишите скрипт, который создает новый элемент <li> с текстовым содержимым Велосипед в переменной new_element и добавляет его в начало списка <ul>.

// Пример заданного HTML-документа:
// <ul><li>Самокат</li></ul>
// Пример результата:
// <ul><li>Велосипед</li><li>Самокат</li></ul>

let list = document.querySelector('ul')
let new_element = document.createElement('li')
function createElPrepend() {
    new_element.innerText = 'Велосипед'
    list.prepend(new_element)
}
createElPrepend()