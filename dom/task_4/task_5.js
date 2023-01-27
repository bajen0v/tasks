// В HTML-документе задан тег <button> с идентификатором delete и тег <ul> c идентификатором points и c элементами <li> внутри. Напишите скрипт, который позволяет удалить последний элемент <li> в списке <ul> при нажатии на кнопку.


let btnDelete = document.querySelector('#delete')
let points = document.querySelector('#points')


btnDelete.addEventListener('click', function(){
    points.lastElementChild.remove()
})