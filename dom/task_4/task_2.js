// В HTML-документе задан тег <button> с идентификатором btn и тег <input> с идентификатором val. Напишите скрипт, который выводит в консоль значение тега <input> при клике на кнопку.

let btn = document.querySelector('#btn')
let input = document.querySelector('#val')

btn.onclick = getInputTxt

function getInputTxt () {
    console.log(input.value)
}