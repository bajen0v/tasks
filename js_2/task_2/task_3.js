// В программе задана переменная layout, которая хранит в себе строковое значение. Данная строка содержит в себе часть HTML-верстки с числами. На основе значения layout сформируйте массив из чисел, которые встречаются в верстке. Если число четное, возведите его в квадрат, в ином случае оставьте без изменений. Полученный массив выведите в консоль. Если строка layout не содержит чисел, выведите пустой массив.

// Пример значений переменных:
// layout = "<p>10</p><p>14</p><p>23</p><p>43</p><p>98</p><p>101</p>"
// Пример результата:
// [100, 196, 23, 43, 9604, 101]

let layout = "<p>10</p><p>14</p><p>23</p><p>43</p><p>98</p><p>101</p>"

function getArrNum(str) {
let arrNum = layout.match(/\d+/g)
let arr = arrNum.map(elem => Number.parseInt(elem))
return arr
}

function getSqrt(arr) {
let result = arr.map(elem => elem % 2 === 0 ? elem**2 : elem );
return console.log(result)
}

getSqrt(getArrNum(layout))


// function getStrNum(str){
// let layoutfltr = layout.replaceAll(/\D/g, ' ')
// let arrNumber = layoutfltr.split(' ')
// let arrNumFltr = arrNumber.filter(elem => elem.length > 0)
// let arr = arrNumFltr.map(elem => Number.parseInt(elem))
// return arr
// }