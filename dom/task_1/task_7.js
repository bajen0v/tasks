// В HTML-документе есть тег с классом content, внутри него есть тег <p>. Напишите скрипт, который заменит этот тег <p> на тег <b>, сохранив текст внутри этого тега.

// Пример заданного HTML-документа:
// <p class="content">
// <p>Внутренний текст</p>
// </p>
// Пример результата:
// <p class="content">
// <b>Внутренний текст</b>
// </p>


let content = document.querySelector('.content')

function changeContent () {
    let txt = content.innerText 
    content.innerHTML = '<b></b>'
    content.innerText = txt
}

changeContent()
console.log(content)