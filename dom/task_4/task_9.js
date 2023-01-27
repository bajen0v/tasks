// В HTML-документе есть два тега <div> с идентификаторами div1 и div2 с элементами <p> внутри. Напишите скрипт, который перемещает тег <p> из одного тега <div> в другой при клике по этому элементу <p>.

let d1 = document.querySelector('#div1')
let d2 = document.querySelector('#div2')

document.addEventListener('click', (event) => {
  if(event.target.parentElement.id === 'div1') {
  d2.append(event.target)
} else if (event.target.parentElement.id === 'div2') {
 d1.append(event.target)
} 

})