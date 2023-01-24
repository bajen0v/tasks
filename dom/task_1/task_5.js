// В HTML-документе существует тег с классом price и числовым значением. Напишите скрипт, который увеличивает в теге значение цены в два раза.

// Пример заданного HTML-документа:
// <div class="price">100</div>
// Пример результата:
// <div class="price">200</div>

function priceSquare() {
    let prices = document.querySelector('.price')
    prices.innerText = prices.innerText * 2
    }
    
    priceSquare()