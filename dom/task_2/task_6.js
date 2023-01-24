// В HTML-документе заданы теги <p>. Напишите скрипт, который удаляет теги, внутри которых хранится текстовое значение Delete.

// Пример заданного HTML-документа:
// <p>Delete<p>
// <p>Абзац<p>
// <p>Delete<p>
// Пример результата:
// <p>Абзац<p></p>


let paragraph = document.querySelectorAll('p')

paragraph.forEach(el => el.innerText === 'Delete' ? el.remove() : el)
