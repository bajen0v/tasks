// Напишите скрипт, который создает новый элемент <p> в переменной new_element и добавляет его в тег с идентификатором root. Созданный тег <p> должен содержать в себе фразу Ура! Мой скрипт отработал верно!

// Пример результата:
// <div id="root">
// <p>Ура! Мой скрипт отработал верно!</p>
// </div>

let root = document.getElementById('root')
let new_element = document.createElement("p")
function createEl(){
    new_element.innerText = 'Ура! Мой скрипт отработал верно!'
	root.appendChild(new_element)
}
createEl()


