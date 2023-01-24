// В HTML-документе есть несколько тегов <div>. Напишите скрипт, который всем тегам <div> добавляет класс adds.

// Пример заданного HTML-документа:
// <div><p>Реклама</p></div>
// <div>Баннер</div>
// Пример результата:
// <div class="adds"><p>Реклама</p></div>
// <div class="adds">Баннер</div>

let divTag = document.querySelectorAll('div')

divTag.forEach(el => el.className = 'adds')
