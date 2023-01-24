// Выведите в консоль название последнего тега, у которого есть класс target.

// Пример заданного HTML-документа:
// <div class="target">Первый элемент</div>
// <p class="target">Второй второй</p>
// <span class="target">Третий третий</span>
// Пример результата:
// span

let targets = document.querySelectorAll('.target')

function couterTags(){
 
    let target = targets[targets.length-1].tagName.toLowerCase()
    console.log(target)
}

couterTags()