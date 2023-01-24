// В HTML-документе есть несколько тегов с классом promo. Напишите скрипт, который определяет количество элементов с данным классом и выводит результат в консоль.

// Пример заданного HTML-документа:
// <p class="promo">...</p>
// …
// <div class="promo">...</div>
// Пример результата:
// 2


function couterTags(){
    let elems = document.querySelectorAll('.promo')
    let result = 0
    elems.forEach(e => e ? result += 1 : result)
    return result
}

console.log(couterTags())