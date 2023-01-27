//  HTML-документе задан тег <button> с идентификатором btn и тег <p> с идентификатором val. Напишите скрипт, который выводит в консоль содержимое тега <p> при клике на кнопку.

 let btn = document.querySelector('#btn')
 let paragraph = document.querySelector('#val')

 btn.addEventListener('click', function(){
    console.log(paragraph.innerText)
 })