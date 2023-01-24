// В HTML-документе есть тег <p> c классом links. Внутри этого элемента указана просто текстовая ссылка без тега <a>. Напишите скрипт, который заменит этот текст на тег <a>, а в качестве содержимого тега <a> укажет изначальный текст.

// Пример заданного HTML-документа:
// <p class="links">google.com</p>
// Пример результата:
// <p class="links"><a>google.com</a></p>


let c = document.querySelector('.links')
let h = c.textContent
c.innerHTML = `<a>${h}</a>`
console.log(c)


