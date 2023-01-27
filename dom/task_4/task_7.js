// В HTML-документе задан тег <button> с классом copy. Напишите скрипт, который позволит при нажатии на кнопку <button> создать ее копию и расположить в конце тега body.

let btnCopy = document.querySelector('.copy')

btnCopy.addEventListener('click', function(){
let clone = document.createElement(btnCopy.tagName.toLowerCase())
let sec = document.createElement(btnCopy.parentElement.tagName.toLowerCase())
  sec.appendChild(clone)
  sec.className = btnCopy.parentElement.className
  clone.className = btnCopy.className
    clone.innerText = btnCopy.innerText
    document.body.append(sec)
  console.log(sec)
})