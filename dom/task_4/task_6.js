// В HTML-документе задан тег <div> c идентификатором square в виде красного квадрата. У него есть атрибут style с указанными высотой и шириной в 100 пикселей. Напишите скрипт, который уменьшает ширину и высоту квадрата на 10% при клике по нему.


let square = document.querySelector('#square')

square.addEventListener('click', function(){
let w = Number.parseInt(square.style.width)
let h = Number.parseInt(square.style.height)

  w = w - (w * 10/100)
  h = h - (h * 10/100)
console.log(w,h)
  square.style.width = w + 'px'
  square.style.height = h + 'px'
})