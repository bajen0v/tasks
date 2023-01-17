// Напишите скрипт, который определяет тип тега с классом secret и выводит его в консоль.

// Пример заданного HTML-документа:
// <div class="secret">...</div>
// Пример результата:
// div

function getTag () {
    let elem = document.querySelector('.secret')
    console.log(elem.tagName.toLowerCase())
  }
  
  
  getTag()