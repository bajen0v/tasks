// В HTML-документе задан тег <div> c идентификатором square. Он представляет собой синий квадрат. Напишите скрипт, который позволяет сделать <div> прозрачным (opacity: 0) при клике по нему.

let square = document.querySelector('#square')


square.onclick = setOpacity

function setOpacity() {
    square.style.opacity = 0
}