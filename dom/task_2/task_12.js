// Напишите программу, которая считает количество <div>-, <p>- и <h2>-тегов и записывает его в объект tags, как в примере. Выведите сформированный объект в консоль.
// Пример заданного HTML-документа:
// <p>100</p>
// <p>200</p>
// <div>50</div>
// <h2></h2>
// <h2>40</h2>
// Пример результата:
// {"div": 1, "p": 2, "h2": 2}

const objTags = {
    'div' : document.querySelectorAll('div').length,
    'p' : document.querySelectorAll('p').length,
    'h2' : document.querySelectorAll('h2').length,
  }
  
  console.log(objTags)