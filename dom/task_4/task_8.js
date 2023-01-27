// В HTML-документе есть несколько тегов <p>. Внутри них указаны числа. Напишите скрипт, который позволяет при нажатии на любой параграф увеличить его содержимое на единицу.


document.addEventListener('click', (event) => {
  if(event.target.tagName === 'P') {
  event.target.innerText = +event.target.innerText + 1
}
})