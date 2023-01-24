// В скрипте объявлена переменная values, которая содержит массив из строк. В HTML-верстке есть два тега <div> с классами div1 и div2. Допишите скрипт так, чтобы все теги <p> из тега с идентификатором div1, значение которого встречается в списке values, переместились в тег с идентификатором div2.
// Пример значений:
// values = ["велосипед", "ролики", "лыжи"]
// Пример заданного HTML-документа:
// <div id="div1"><p>велосипед</p><p>лыжи</p><p>скейт</p></div>
// <div id="div2"></div>
// Пример результата в HTML-документе:
// <div id="div1"><p>скейт</p></div>
// <div id="div2"><p>велосипед</p><p>лыжи</p></div>

const values = ["велосипед", "ролики", "лыжи"];

let d1 = document.querySelectorAll('#div1 > p')
let d2 = document.querySelector('#div2')


d1.forEach(elem => {
        values.forEach(el => {
            elem.innerText === el ? d2.append(elem) : elem
        })
        
    })