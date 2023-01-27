// В HTML-документе задан тег <select> c идентификатором numbers. Напишите скрипт, который добавит внутрь этого тега несколько тегов <option> со значениями от 10 до 550 с шагом 10. Значение у тега <option> должно быть указано внутри и в атрибуте value.

let numbers = document.querySelector('#numbers')

function createOption(){
    
    for(let i = 10; i<= 550; i+=10){
        let option = document.createElement('option')
        option.value = i
        option.innerText = i
        numbers.appendChild(option)
    }


}
createOption()

