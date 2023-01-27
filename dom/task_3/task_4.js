// В HTML-документе есть тег <p> c идентификатором rainbow. Внутри этого тега указано число. Реализуйте скрипт, который делает преобразование в зависимости от следующих условий:
// Если числовое значение находится в диапазоне от 1 до 9 включительно, должно меняться значение атрибута style. Цвет текста — на красный (#c0392b).
// Если числовое значение находится в диапазоне от 10 до 20 включительно — на коричневый (#e17055).
// В ином случае — на желтый (#fdcb6e).

let rainbow = document.querySelector('#rainbow')

if (rainbow.innerText > 0 && rainbow.innerText < 10) {
    rainbow.style.color = '#c0392b'
} else if(rainbow.innerText >= 10 && rainbow.innerText <= 20) {
    rainbow.style.color = '#e17055'
} else {
    rainbow.style.color = '#fdcb6e'
}