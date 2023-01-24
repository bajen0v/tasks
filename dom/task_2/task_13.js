// В HTML-документе есть тег <ul> с идентификатором tasks, и внутри него есть несколько тегов <li> с текстом. Напишите скрипт, который позволяет отсортировать элементы <li> в теге <ul> по длине содержимого.
// Пример заданного HTML-документа:
// <ul id="tasks">
// <li>Велосипед</li><li>Скейт</li><li>Самокат</li>
// </ul>
// Пример результата:
// <ul id="tasks">
// <li>Скейт</li><li>Самокат</li><li>Велосипед</li>
// </ul>

let ulist = document.querySelector('#tasks')
let list = ulist.querySelectorAll('li')
let arr = []

list.forEach(el => {
  arr.push(el.innerText)
})

arr.sort((a,b) => a.length - b.length)
console.log(arr)

for(let i = 0; i < arr.length; i++) {
  list[i].innerText = arr[i]
  }
