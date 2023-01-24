// В HTML-документе задан тег <ul> c классом cars. Внутри этого тега есть несколько тегов <li>. Реализуйте скрипт, который считывает содержимое этих элементов <li>, формирует из них массив и сохраняет в переменной cars.

// Пример заданного HTML-документа:
/* <ul id="cars">
<li>Tesla</li>
<li>Opel</li>
</ul> */
// Пример результата:
// ["Tesla',"Opel"]


let carsEl = document.querySelectorAll('.cars > li')
const cars = [] // [...carsEl].map(el => el.innerText)
carsEl.forEach(el => cars.push(el.innerHTML))

console.log(cars)