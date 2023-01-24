// В скрипте объявлен массив values, который состоит из чисел. В HTML-документе есть множество тегов <p> с классом elems. Необходимо дописать скрипт так, чтобы он удалил все теги <p> с классом elems, значение которых входит в массив values.
// Пример значений:
// values = [10, 50, 100]
// Пример заданного HTML-документа:
// <p class=”elems”>50</p>
// <p class=”elems”>20</p>
// <p class=”elems”>10</p>
// Пример результата в HTML-документе:
// <p class=”elems”>20</p>

let paragraph = document.querySelectorAll('.elems')

paragraph.forEach(elem => {
    values.forEach(el => {
        elem.innerText === el ? elem.innerText.remove() : elem
    })
    
})

